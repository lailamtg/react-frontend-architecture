import {Route, Routes} from 'react-router-dom';
import {Tasks} from '@Pages/Tasks/Tasks.tsx';

export const TaskRoutes = () => {
    return (
        <Routes>
            <Route index element={<Tasks />} />
        </Routes>
    );
};
