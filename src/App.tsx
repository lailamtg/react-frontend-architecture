import {Provider} from 'react-redux';
import {store} from '@Store/Store.ts';

import {BrowserRouter as Router} from 'react-router-dom';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {theme} from '@Theme/MainTheme.ts';
import {MainRoutes} from '@Routes/MainRoutes.tsx';
import {SearchProvider} from './Provider/SearchProvider.tsx';

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <SearchProvider>
                    <CssBaseline />
                    <Router>
                        <MainRoutes />
                    </Router>
                </SearchProvider>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
