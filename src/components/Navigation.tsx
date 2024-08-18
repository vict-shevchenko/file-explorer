import { observer } from 'mobx-react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import { fileExplorerStore } from '../store/FileExplorer.store';

export const Navigation = observer(() => {
	const { loading, searchText, history, historyIndex, goBack, goForward } = fileExplorerStore;
	return (
		<Flex gap="small">
			<Button
				onClick={goBack}
				icon={<ArrowLeftOutlined />}
				size="large"
				disabled={loading || searchText !== '' || historyIndex <= 0}
			/>
			<Button
				onClick={goForward}
				icon={<ArrowRightOutlined />}
				size="large"
				disabled={loading || searchText !== '' || historyIndex === history.length - 1}
			/>
		</Flex>
	);
});
