
import React, { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import useCustom from "./useCustom";

const MarkOfCus = () => {
    const { state, faction } = useCustom();
    const [open, setOpen] = useState(false);

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            {/* כפתור לפתיחת המשוב */}
            <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
                משוב על האתר
            </Button>

            {/* חלונית MUI */}
            <Dialog open={open} onClose={() => setOpen(false)}>

                <DialogTitle>
                    משוב על האתר
                    <IconButton
                        aria-label="close"
                        onClick={() => setOpen(false)}
                        style={{ position: "absolute", right: 8, top: 8 }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <p>האם אתה מרוצה מהאתר?</p>
                    <p style={{ fontSize: "20px", fontWeight: "bold" }}>{state}</p>
                </DialogContent>

                <DialogActions>
                <Button onClick={() => { faction("מרוצה"); setOpen(false); }} color="primary">
                        אני מרוצה 😊
                    </Button>
                    <Button onClick={() => { faction("לא מרוצה"); setOpen(false); }} color="secondary">
                        לא מרוצה 😞
               
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default MarkOfCus;
