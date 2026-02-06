import {GridColDef} from '@mui/x-data-grid';
import {Task} from '../../Models/TaskModel.ts';

export const columns: GridColDef<Task>[] = [
    {
        field: 'title',
        headerName: 'Title',
        editable: true,
        flex: 1,
    },
    {
        field: 'userId',
        headerName: 'User ID',
        editable: true,
        flex: 1,
    },
    {
        field: 'completed',
        headerName: 'Completed',
        editable: true,
        type: 'boolean',
        flex: 1,
    },
];
