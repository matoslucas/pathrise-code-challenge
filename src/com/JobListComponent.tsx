import { useContext, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import JobCard from "./JobCard";
import ConfirmationDialog from "./ConfirmationDialog";

import { JobContext } from "../contexts/TaskContext";

import { JobType } from "../types";
import { Types } from "../reducers/TaskReducer";



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    //backgroundColor: theme.palette.background.transparent,
  },
  marked: {
    textDecoration: "line-through",
  },
}));

const JobListComponent = () => {
  const { state } = useContext(JobContext);

  const [open, setOpen] = useState(false);
  const [isConfrimed, setIsConfirmed] = useState(false);
  const [currentId, setCurrentId] = useState('');

  const { dispatch } = useContext(JobContext);


  const handleClose = (newValue: boolean) => {
    setOpen(false);
    console.log(newValue, "Conforma", currentId)

    if (newValue) {
      dispatch({
        type: Types.REMOVE_JOB,
        payload: { id: currentId },
      });
      setIsConfirmed(newValue);
    }
  };

  const classes = useStyles();

  const getRandomColor = () => {
    const colors = ["#fd6e7b", "#6680b1", "#49bf71", "#8fb1df"];
    return colors[Math.floor(Math.random() * 3)];
  };

  const openDialog = (id: string) => {
    setCurrentId(id);
    setOpen(true);
  };

  return (
    <>
    <div>
      {state.jobs.map((job: JobType) => {
        return <JobCard job={job} key={job.id} color={getRandomColor()} openDialog={ openDialog} />;
      })}
    </div>
    <ConfirmationDialog
    keepMounted
    open={open}
    onClose={handleClose}
    value={isConfrimed}
  />
  </>
  );
};

export default JobListComponent;
