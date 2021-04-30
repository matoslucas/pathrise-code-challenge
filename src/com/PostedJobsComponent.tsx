import { useEffect, useContext, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import JobListComponent from "./JobListComponent";
import { JobContext } from "../contexts/TaskContext";
import { Types } from "../reducers/TaskReducer";

import Services from "../api/services";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: "#f5f5f5",
    height: "100vh",
  },
}));



const PostedJobsComponent = () => {
  const classes = useStyles();

  const { dispatch } = useContext(JobContext);
  useEffect(() => {
    Services.getJobs().then((res) => {
      dispatch({
        type: Types.LOAD_JOBS,
        payload: res.data,
      });
    });
  }, []);

  return (
    <div>
      <JobListComponent />
    </div>
  );
};

export default PostedJobsComponent;
