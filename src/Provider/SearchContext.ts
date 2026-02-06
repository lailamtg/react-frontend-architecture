import {createContext} from 'react';
import {SearchContextValue} from './SearchContextModels.ts';

export const SearchContext = createContext<SearchContextValue | null>(null);
