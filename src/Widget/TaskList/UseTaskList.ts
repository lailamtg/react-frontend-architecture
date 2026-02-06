import {jsonPlaceholderSlice} from '@Store/JSONPlaceholder/JSONPlaceholderSlice.ts';
import {useMemo} from 'react';
import {useAppSelector} from '@Store/Store.ts';
import {useSearchContext} from '../../Provider/UseSearchContext.ts';

export const useTaskList = () => {
    const query = jsonPlaceholderSlice.useGetTasksQuery(undefined, {});
    const searchContext = useSearchContext();

    const filter = useAppSelector((state) => state.filter.filter);
    const data = useMemo(() => {
        console.log('use memo ' + searchContext.searchValue);
        if (!query.data) {
            return [];
        }

        return query.data
            .filter((task) => task.title.toLowerCase().includes(searchContext.searchValue?.toLowerCase() ?? ''))
            .filter((task) => {
                if (filter === 'complete') {
                    return task.completed;
                }

                if (filter === 'open') {
                    return !task.completed;
                }
                return true;
            });
    }, [filter, searchContext.searchValue, query.data]);

    return {data};
};
