import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";

type ConfirmationDialogProps = {
  classes?: Record<"paper", string>;
  keepMounted: boolean;
  value: boolean;
  open: boolean;
  onClose: (value: boolean) => void;
};

const ConfirmationDialog = (props: ConfirmationDialogProps) => {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = useState(false);

  useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleCancel = () => {
    onClose(false);
  };

  const handleOk = () => {
    setValue(true);
    onClose(true);
  };

  const handleClose = () => {
    onClose(value);
  };

  return (
    <Dialog
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
      open={open}
      onClose={handleClose} 
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">Delete Job</DialogTitle>
      <DialogContent>Are you sure to delte this Job?</DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button
          onClick={handleOk}
          style={{ backgroundColor: "#4e3c71", color: "#fff" }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ConfirmationDialog;
