import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Task} from '../../Models/TaskModel.ts';

export const jsonPlaceholderSlice = createApi({
    reducerPath: 'jsonPlaceholderApi',
    tagTypes: ['Task'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder) => ({
        getTasks: builder.query<Task[], void>({
            query: () => '/todos',
            providesTags: ['Task'],
        }),
        getTaskById: builder.query<Task, string>({
            query: (id) => `/todos/${id}`,
            providesTags: ['Task'],
        }),
        addTask: builder.mutation<Task, Task>({
            query: (task) => ({
                url: '/todos',
                method: 'POST',
                body: task,
            }),
            async onQueryStarted(task, {dispatch, queryFulfilled}) {
                const patchResult = dispatch(
                    jsonPlaceholderSlice.util.updateQueryData('getTasks', undefined, (draft) => {
                        draft.unshift(task);
                    }),
                );
                const detailPatchResult = dispatch(
                    jsonPlaceholderSlice.util.updateQueryData('getTaskById', task.id, (draft) => {
                        Object.assign(draft, task);
                    }),
                );
                try {
                    await queryFulfilled;
                } catch {
                    patchResult.undo();
                    detailPatchResult.undo();
                }
            },
        }),

        editTask: builder.mutation<Task, Pick<Task, 'id'> & Partial<Task>>({
            query: ({id, ...patch}) => ({
                url: `/todos/${id}`,
                method: 'PATCH',
                body: patch,
            }),
            async onQueryStarted({id, ...patch}, {dispatch, queryFulfilled}) {
                const patchResult = dispatch(
                    jsonPlaceholderSlice.util.updateQueryData('getTasks', undefined, (draft) => {
                        const target = draft.find((task) => task.id === id);
                        if (!target) {
                            return;
                        }
                        Object.assign(target, patch);
                    }),
                );
                const detailPatchResult = dispatch(
                    jsonPlaceholderSlice.util.updateQueryData('getTaskById', id, (draft) => {
                        Object.assign(draft, patch);
                    }),
                );
                try {
                    await queryFulfilled;
                } catch {
                    patchResult.undo();
                    detailPatchResult.undo();
                }
            },
        }),
        deleteTask: builder.mutation<void, string>({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(id, {dispatch, queryFulfilled}) {
                const patchResult = dispatch(
                    jsonPlaceholderSlice.util.updateQueryData('getTasks', undefined, (draft) => {
                        const index = draft.findIndex((task) => task.id === id);
                        draft.splice(index, 1);
                    }),
                );
                try {
                    await queryFulfilled;
                } catch {
                    patchResult.undo();
                }
            },
        }),
    }),
});
