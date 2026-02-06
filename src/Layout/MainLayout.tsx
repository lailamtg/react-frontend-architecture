import {AppBar, Box, Paper, Stack, Toolbar, Typography} from '@mui/material';
import {Outlet} from 'react-router-dom';
import {TabBar} from '../Widget/TabBar/TabBar.tsx';

export const MainLayout = () => {
    return (
        <>
            <Stack spacing={8.1}>
                <Box>
                    <AppBar>
                        <Toolbar>
                            <Typography>Exos Frontend Workshop - Laila</Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Box>
                    <Paper>
                        <TabBar />
                    </Paper>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100vh', // Full viewport height
                        }}
                    >
                        {/*<DefaultBreadcrumbs />*/}
                        <Outlet />
                    </Box>
                </Box>
            </Stack>
        </>
    );
};
