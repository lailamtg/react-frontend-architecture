import {Box, Stack, Tab, Tabs} from '@mui/material';
import React, {ChangeEvent, useEffect, useState} from 'react';
import {mapIndexToPath} from './TabBarUtils.ts';
import {useNavigate} from 'react-router-dom';
import {Search} from '@mui/icons-material';
import {TextField} from '../TextField/TextField.tsx';
import {useSearchContext} from '../../Provider/UseSearchContext.ts';
import {useDebounce} from '@Hooks/UseDebounce.ts';

export const TabBar = () => {
    const [value, setValue] = useState<number>(0);
    const [inputValue, setInputValue] = useState<string>('');
    const navigate = useNavigate();

    const searchContext = useSearchContext();
    const debouncedValue = useDebounce(inputValue);
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        navigate(mapIndexToPath(newValue));
    };
    useEffect(() => {
        searchContext.setSearchValue(debouncedValue);
    }, [debouncedValue, searchContext, searchContext.setSearchValue]);

    return (
        <>
            <Box sx={{borderBottom: 1, borderColor: 'divider', width: '100%'}}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    sx={{width: '100%'}}
                >
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Dashboard" id={`simple-tab-0`} />
                        <Tab label="Tasks" id={`simple-tab-1`} />
                        <Tab label="Posts" id={`simple-tab-2`} />
                    </Tabs>
                    <TextField
                        sx={{width: '300px'}}
                        value={inputValue}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setInputValue(e.target.value);
                        }}
                        placeholder={'Search a Task'}
                        startIcon={<Search />}
                    />
                </Stack>
            </Box>
        </>
    );
};
