import Snackbar from '@mui/material/Snackbar';
import { SyntheticEvent } from 'react';
import { SnackbarCloseReason } from '@mui/material/Snackbar/Snackbar';
import { Alert } from '@mui/material';

interface ToastMessageComponentProps {
    open: boolean;
    message: string;
    onClose?: (event: Event | SyntheticEvent<any, Event>, reason?: SnackbarCloseReason) => void;
    autoHideDuration?: number;
}

export default function ToastMessageComponent({ 
    open, 
    message, 
    onClose,
    autoHideDuration = 5000 
}: ToastMessageComponentProps) {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={onClose}
        >
            <Alert
                severity="error"
                variant="filled"
                sx={{ width: '100%' }}
                onClose={onClose}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}
