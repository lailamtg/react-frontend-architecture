import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {useDispatch, useSelector} from 'react-redux';
import {filterSlice} from '@Store/Filter/FilterSlice.ts';
import {jsonPlaceholderSlice} from '@Store/JSONPlaceholder/JSONPlaceholderSlice.ts';

export const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        [jsonPlaceholderSlice.reducerPath]: jsonPlaceholderSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(jsonPlaceholderSlice.middleware);
    },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
