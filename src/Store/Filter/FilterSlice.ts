import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FilterState, FilterValue} from '@Store/Filter/FilterSliceModels.ts';

const initialState: FilterState = {
    filter: 'all',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<FilterValue>) => {
            state.filter = action.payload;
        },
    },
});
