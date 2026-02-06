import {useState} from 'react';
import {SearchProviderProps} from './SearchContextModels.ts';
import {SearchContext} from './SearchContext.ts';

export const SearchProvider = (props: SearchProviderProps) => {
    const [searchValue, setSearchValue] = useState<string>('');
    return <SearchContext.Provider value={{searchValue, setSearchValue}}>{props.children}</SearchContext.Provider>;
};
