const folders: Folder[] = [
	{
		id: '1',
		name: 'Movies',
		createdAt: new Date('2024-01-01'),
		modifiedAt: new Date('2024-01-05'),
		type: 'folder',
		parentId: null,
	},
	{
		id: '2',
		name: 'Music',

		createdAt: new Date('2024-01-01'),
		modifiedAt: new Date('2024-01-05'),
		type: 'folder',
		parentId: null,
	},

	{
		id: '1-1',
		name: 'Action',

		createdAt: new Date('2024-01-02'),
		modifiedAt: new Date('2024-01-06'),
		type: 'folder',
		parentId: '1',
	},
	{
		id: '1-2',
		name: 'Comedy',

		createdAt: new Date('2024-01-02'),
		modifiedAt: new Date('2024-01-06'),
		type: 'folder',
		parentId: '1',
	},
	{
		id: '1-3',
		name: 'Drama',

		createdAt: new Date('2024-01-02'),
		modifiedAt: new Date('2024-01-06'),
		type: 'folder',
		parentId: '1',
	},

	{
		id: '2-1',
		name: 'Rock',

		createdAt: new Date('2024-01-02'),
		modifiedAt: new Date('2024-01-06'),
		type: 'folder',
		parentId: '2',
	},
	{
		id: '2-2',
		name: 'Jazz',

		createdAt: new Date('2024-01-02'),
		modifiedAt: new Date('2024-01-06'),
		type: 'folder',
		parentId: '2',
	},
	{
		id: '2-3',
		name: 'Classical',

		createdAt: new Date('2024-01-02'),
		modifiedAt: new Date('2024-01-06'),
		type: 'folder',
		parentId: '2',
	},
];

const files: File[] = [
	{
		id: '1-1-1',
		name: 'action1',
		extension: '.mp4',
		size: 700,
		createdAt: new Date('2024-01-03'),
		modifiedAt: new Date('2024-01-07'),
		type: 'file',
		parentId: '1-1',
	},
	{
		id: '1-1-2',
		name: 'action2',
		extension: '.mp4',
		size: 750,
		createdAt: new Date('2024-01-03'),
		modifiedAt: new Date('2024-01-07'),
		type: 'file',
		parentId: '1-1',
	},
	{
		id: '1-1-3',
		name: 'action3',
		extension: '.mp4',
		size: 800,
		createdAt: new Date('2024-01-03'),
		modifiedAt: new Date('2024-01-07'),
		type: 'file',
		parentId: '1-1',
	},

	{
		id: '1-2-1',
		name: 'comedy1',
		extension: '.mp4',
		size: 600,
		createdAt: new Date('2024-01-03'),
		modifiedAt: new Date('2024-01-07'),
		type: 'file',
		parentId: '1-2',
	},
	{
		id: '1-2-2',
		name: 'comedy2',
		extension: '.mp4',
		size: 620,
		createdAt: new Date('2024-01-03'),
		modifiedAt: new Date('2024-01-07'),
		type: 'file',
		parentId: '1-2',
	},
	{
		id: '1-2-3',
		name: 'comedy3',
		extension: '.mp4',
		size: 640,
		createdAt: new Date('2024-01-03'),
		modifiedAt: new Date('2024-01-07'),
		type: 'file',
		parentId: '1-2',
	},

	{
		id: '1-3-1',
		name: 'drama1',
		extension: '.mp4',
		size: 800,
		createdAt: new Date('2024-01-03'),
		modifiedAt: new Date('2024-01-07'),
		type: 'file',
		parentId: '1-3',
	},
	{
		id: '1-3-2',
		name: 'drama2',
		extension: '.mp4',
		size: 820,
		createdAt: new Date('2024-01-03'),
		modifiedAt: new Date('2024-01-07'),
		type: 'file',
		parentId: '1-3',
	},
	{
		id: '1-3-3',
		name: 'drama3',
		extension: '.mp4',
		size: 840,
		createdAt: new Date('2024-01-03'),
		modifiedAt: new Date('2024-01-07'),
		type: 'file',
		parentId: '1-3',
	},

	{
		id: '2-1-1',
		name: 'rock1',
		extension: '.mp3',
		size: 500,
		createdAt: new Date('2024-01-03'),
		modifiedAt: new Date('2024-01-07'),
		type: 'file',
		parentId: '2-1',
	},
	{
		id: '2-1-2',
		name: 'rock2',
		extension: '.mp3',
		size: 520,
		createdAt: new Date('2024-01-03'),
		modifiedAt: new Date('2024-01-07'),
		type: 'file',
		parentId: '2-1',
	},
	{
		id: '2-1-3',
		name: 'rock3',
		extension: '.mp3',
		size: 540,
		createdAt: new Date('2024-01-03'),
		modifiedAt: new Date('2024-01-07'),
		type: 'file',
		parentId: '2-1',
	},

	{
		id: '2-2-1',
		name: 'jazz1',
		extension: '.mp3',
		size: 600,
		createdAt: new Date('2024-01-03'),
		modifiedAt: new Date('2024-01-07'),
		type: 'file',
		parentId: '2-2',
	},
	{
		id: '2-2-2',
		name: 'jazz2',
		extension: '.mp3',
		size: 620,
		createdAt: new Date('2024-01-03'),
		modifiedAt: new Date('2024-01-07'),
		type: 'file',
		parentId: '2-2',
	},
	{
		id: '2-2-3',
		name: 'jazz3',
		extension: '.mp3',
		size: 640,
		createdAt: new Date('2024-01-03'),
		modifiedAt: new Date('2024-01-07'),
		type: 'file',
		parentId: '2-2',
	},

	{
		id: '2-3-1',
		name: 'classical1',
		extension: '.mp3',
		size: 700,
		createdAt: new Date('2024-01-03'),
		modifiedAt: new Date('2024-01-07'),
		type: 'file',
		parentId: '2-3',
	},
	{
		id: '2-3-2',
		name: 'classical2',
		extension: '.mp3',
		size: 710,
		createdAt: new Date('2024-01-03'),
		modifiedAt: new Date('2024-01-07'),
		type: 'file',
		parentId: '2-3',
	},
	{
		id: '2-3-3',
		name: 'classical3',
		extension: '.mp3',
		size: 720,
		createdAt: new Date('2024-01-03'),
		modifiedAt: new Date('2024-01-07'),
		type: 'file',
		parentId: '2-3',
	},
	{
		id: '0-1',
		name: 'document',
		extension: '.txt',
		size: 720,
		createdAt: new Date('2024-01-05'),
		modifiedAt: new Date('2024-01-12'),
		type: 'file',
		parentId: null,
	},
];

export type File = {
	id: string;
	name: string;
	extension: string;
	size: number;
	createdAt: Date;
	modifiedAt: Date;
	type: 'file';
	parentId: string | null;
};

export type Folder = {
	id: string;
	name: string;
	createdAt: Date;
	modifiedAt: Date;
	type: 'folder';
	parentId: string | null;
};

export function getFolderContents(folderId: string | null = null): (Folder | File)[] {
	const subFolders = folders.filter((folder) => folder.parentId === folderId);
	const subFiles = files.filter((file) => file.parentId === folderId);

	return [...subFolders, ...subFiles];
}

export function findByName(name: string): (Folder | File)[] {
	const matchedFolders = folders.filter((folder) => folder.name.toLowerCase().includes(name.toLowerCase()));
	const matchedFiles = files.filter((file) => file.name.toLowerCase().includes(name.toLowerCase()));

	return [...matchedFolders, ...matchedFiles];
}
