# File Explorer

This is demo application

## Out of scope
- Ordering by (name/last modified date)

## Assumptions
- IDs of files and folders do not overlap
- IDs of files and folders represented as strings

## Data store structure
- For this case, flat structure of data in store works better. It allows to pick any folder to display by ID with O(n) complexity
- Full store example can be seen if file *src/store/FileExplorer.store.ts*
```typescipt
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

type FolderContent = (File | Folder)[];

folders: { [key: string]: FolderContent };

// Example
  folders: {
    '/': [ //root folder
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
    ]
    '1': [
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
      }
    ]
  }
```


## API
  - request for fetching content of folder can be done via `/catalog/folder_id` and not require to pass full path.
