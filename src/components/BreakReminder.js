import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles } from '@mui/material';


const BreakReminder = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //   const classes = useStyles();

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Take a break
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Take a break"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        It's important to take regular breaks to avoid eye strain and fatigue.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Okay, got it!
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default BreakReminder;
