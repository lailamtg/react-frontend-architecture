import {DataGrid} from '@mui/x-data-grid';
import {columns} from './TaskListWorker.ts';
import {useTaskList} from './UseTaskList.ts';

export const TaskList = () => {
    const controller = useTaskList();

    return <DataGrid rows={controller.data} columns={columns} autoPageSize={true} />;
};
