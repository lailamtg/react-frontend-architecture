import {Route, Routes} from 'react-router-dom';
import {MainLayout} from '../Layout/MainLayout.tsx';
import {DashboardPage} from '@Pages/Dashboard/DashboardPage.tsx';
import {TaskRoutes} from '@Routes/TaskRoutes.tsx';

export const MainRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/tasks" element={<TaskRoutes />} />
                <Route path="/posts" element={<></>} />
            </Route>
            <Route path={'*'} element={<></>} />
        </Routes>
    );
};
