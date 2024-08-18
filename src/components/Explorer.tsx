import { observer } from 'mobx-react';
import { fileExplorerStore } from '../store/FileExplorer.store';
import { Flex, List, Spin } from 'antd';
import { FileOutlined, FolderFilled } from '@ant-design/icons';

// file and f600px;id do nor overlap

export const Explorer = observer(() => {
	return (
		<div>
			<Spin spinning={fileExplorerStore.loading}>
				<List
					bordered
					dataSource={fileExplorerStore.viewFolder}
					renderItem={(item) => (
						<List.Item key={item.id}>
							{item.type === 'folder' ? (
								<List.Item.Meta
									avatar={<FolderFilled />}
									title={
										<Flex justify="start">
											<a onClick={() => fileExplorerStore.openFolder(item.id)}>{item.name}</a>
										</Flex>
									}
								/>
							) : (
								<List.Item.Meta
									avatar={<FileOutlined />}
									title={
										<Flex justify="start">
											<a href="https://ant.design">
												{item.name}
												{item.extension}
											</a>
										</Flex>
									}
								/>
							)}
							<div>{item.modifiedAt.toLocaleString()}</div>
						</List.Item>
					)}
				/>
			</Spin>
		</div>
	);
});
