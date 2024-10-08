import { observable, computed, action, autorun } from 'mobx';
import { File, Folder, getFolderContents, findByName } from '../api/explorer.api';

const ROOT_FOLDER_KEY = '/';

class FileExplorerStore {
	@observable accessor folders: { [key: string]: FolderContent };
	@observable accessor loading: boolean = false;

	// using history and historyIndex to keep information about the current folder id to be displayed
	// and to traverse back and forth with navigation buttons
	@observable accessor history: string[] = [];
	@observable accessor historyIndex: number = -1;

	@observable accessor searchText: string = '';
	@observable accessor searchResults: FolderContent = [];

	constructor() {
		this.folders = {};

		// run search request each time searchText changes
		autorun(
			() => {
				this.search(this.searchText);
			},
			{ delay: 300 }
		);
	}

	// automatically select the folder to be displayed in UI.
	@computed
	get viewFolder() {
		if (this.historyIndex < 0) {
			return [];
		}

		if (this.searchText) {
			return this.searchResults;
		}

		return this.folders[this.history[this.historyIndex]] || [];
	}

	@action.bound
	async setLoading(loading: boolean) {
		this.loading = loading;
	}

	@action.bound
	async setHistoryIndex(newIndex: number) {
		this.historyIndex = newIndex;
	}

	@action.bound
	async updateHistory(removeIndex: number, folderIdToAdd: string) {
		this.history.splice(removeIndex);
		this.history.push(folderIdToAdd);
	}

	// callback when user click on folder name to go inside the folder
	@action.bound
	async openFolder(folderId?: string) {
		const folderInternalId = folderId || ROOT_FOLDER_KEY;
		this.searchText = '';

		if (!this.folders[folderInternalId]) {
			this.setLoading(true);
			try {
				// Simulate loading folder content
				const folderContent: FolderContent = await new Promise((resolve) =>
					setTimeout(() => resolve(getFolderContents(folderId)), 1000)
				);

				this.folders[folderInternalId] = folderContent;
			} finally {
				this.setLoading(false);
			}
		}

		this.updateHistory(this.historyIndex + 1, folderInternalId);
		this.setHistoryIndex(this.historyIndex + 1);
	}

	// callback to execute search and fill in searchResults data
	@action.bound
	async search(searchText: string) {
		if (searchText === '') {
			this.searchResults = [];
			return;
		}

		this.setLoading(true);
		try {
			// Simulate loading folder content
			const folderContent: FolderContent = await new Promise((resolve) =>
				setTimeout(() => resolve(findByName(searchText)), 1000)
			);

			this.searchResults = folderContent;
		} finally {
			this.setLoading(false);
		}
	}

	@action.bound
	goBack() {
		if (this.historyIndex > 0) {
			this.setHistoryIndex(this.historyIndex - 1);
		}
	}

	@action.bound
	goForward() {
		if (this.historyIndex < this.history.length - 1) {
			this.setHistoryIndex(this.historyIndex + 1);
		}
	}

	@action.bound
	setSearchText(searchText: string) {
		this.searchText = searchText.toLowerCase();
	}
}

type FolderContent = (File | Folder)[];

export const fileExplorerStore = new FileExplorerStore();
