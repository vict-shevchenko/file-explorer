import { useEffect } from 'react';
import './App.css';
import { Flex } from 'antd';
import { observer } from 'mobx-react';
import { fileExplorerStore } from './store/FileExplorer.store';
import { Explorer } from './components/Explorer';
import { Navigation } from './components/Navigation';
import { Search } from './components/Search';

const App = observer(() => {
	useEffect(() => {
		fileExplorerStore.openFolder();
	}, []);
	return (
		<>
			<Flex gap="middle" vertical>
				<Flex justify="space-between">
					<Navigation />
					<Search />
				</Flex>
				<Explorer />
			</Flex>
		</>
	);
});

export default App;
