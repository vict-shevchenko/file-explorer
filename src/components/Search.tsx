import { Input } from 'antd';
import { observer } from 'mobx-react';

import { fileExplorerStore } from '../store/FileExplorer.store';

export const Search = observer(() => {
	return (
		<div>
			<Input
				size="large"
				style={{ minWidth: '300px' }}
				placeholder="Search for files and folders"
				value={fileExplorerStore.searchText}
				onChange={(e) => fileExplorerStore.setSearchText(e.target.value)}
				allowClear
			></Input>
		</div>
	);
});
