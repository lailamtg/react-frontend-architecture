import {ReactNode} from 'react';

export interface SearchContextValue {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

export interface SearchProviderProps {
    children?: ReactNode;
}
