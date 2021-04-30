import { useContext, useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Dialog from "@material-ui/core/Dialog";

import InputAdornment from "@material-ui/core/InputAdornment";

import AccountCircle from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { JobContext } from "../contexts/TaskContext";
import { Types } from "../reducers/TaskReducer";
import { JobType } from "../types";
import { v4 as uuidv4 } from "uuid";

type AddJobComponentProps = {
  open: boolean;
  onClose: () => void;
};

const AddJobComponent = ({ open, onClose }: AddJobComponentProps) => {
  const { dispatch } = useContext(JobContext);
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const onAddJob = () => {
    let task: JobType = {
      id: uuidv4(),
      jobTitle: jobTitle,
      company: company,
      isDeleted: false,
      created: new Date(),
    };

    dispatch({
      type: Types.ADD_JOB,
      payload: task,
    });
    setJobTitle("");
    setCompany("");
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      maxWidth="xs"
      aria-labelledby="confirmation-dialog-title"
      open={open}
      onClose={handleClose}
    >
      <DialogTitle id="confirmation-dialog-title">Add Job</DialogTitle>
      <DialogContent>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <TextField
            className={"search-icon"}
            label=""
            placeholder="Jobt title"
            variant="outlined"
            size="small"
            value={jobTitle}
            onChange={(e) => {
              setJobTitle(e.target.value);
            }}
          />
          <br />
          <TextField
            className={"suitcase-icon"}
            label=""
            placeholder="company"
            variant="outlined"
            size="small"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            onClose();
            onAddJob();
          }}
          style={{ backgroundColor: "#4e3c71", color: "#fff" }}
        >
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddJobComponent;
