import { useState, useContext } from "react";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import moment from "moment";

import CompanyAvatar from "./CompanyAvatar";
import { JobType } from "../types";
import { JobContext } from "../contexts/TaskContext";
import { Types } from "../reducers/TaskReducer";

type JobCardProps = {
  job: JobType;
  color: string;
  openDialog: (id: string)=>void;
};

const JobCard = ({ job, color, openDialog }: JobCardProps) => {
  const [isHide, setIsHide] = useState("hide");

  const { dispatch } = useContext(JobContext);


  return (
    <Card
      style={{
        minWidth: 316,
        minHeight: 113,
        width: 316,
        margin: "0.4rem",
        color: "#fff",
        backgroundColor: color,
      }}
      onMouseOver={() => setIsHide("show")}
      onMouseOut={() => setIsHide("hide")}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0.5rem 2rem 0 1.6rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <CompanyAvatar name={job.company} />
            &nbsp;&nbsp;
            <span>{job.company}</span>
          </div>
          <IconButton
            className={isHide}
            edge="end"
            onClick={() => {
                openDialog(job.id);
                /*
              dispatch({
                type: Types.REMOVE_JOB,
                payload: { id: job.id },
              });
              */
            }}
          >
            <DeleteOutlineIcon />
          </IconButton>
        </div>
        <div style={{display: "flex", width: "100%", marginLeft: "6rem"}}>
          <span>{job.jobTitle}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            margin: "0 1rem 0 0",
          }}
        >
          <span style={{fontSize: "0.8rem"}}>{moment(job.created).fromNow()} ...</span>
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
