import {forwardRef, ReactNode} from 'react';
import {Icon, InputBase, InputBaseProps, Paper} from '@mui/material';

export const TextField = forwardRef<unknown, InputBaseProps & {startIcon?: ReactNode}>(function TextField(
    {startIcon, ...props},
    ref,
) {
    return (
        <Paper sx={{mt: 1, p: '4px 8px', display: 'flex', alignItems: 'center'}}>
            {startIcon && <Icon sx={{mr: 1}}>{startIcon}</Icon>}
            <InputBase ref={ref} fullWidth={true} {...props} />
        </Paper>
    );
});
