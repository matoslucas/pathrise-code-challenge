import Services from "../api/services";
import { JobType } from "../types";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  ADD_JOB = "add-job",
  REMOVE_JOB = "remove-job",
  LOAD_JOBS = "load-jobs",
}

type JobPayload = {
  [Types.ADD_JOB]: JobType;
  [Types.REMOVE_JOB]: {
    id: string;
  };
  [Types.LOAD_JOBS]: JobType[];
};

export type JobActions = ActionMap<JobPayload>[keyof ActionMap<JobPayload>];

export const jobReducer = (state: JobType[], action: JobActions) => {
  switch (action.type) {
    case Types.ADD_JOB: {
      Services.postJob(action.payload);
      return [...state, action.payload];
    }

    case Types.REMOVE_JOB: {
      Services.deleteJob(action.payload.id);
      return state.filter((job) => job.id !== action.payload.id);
    }

    case Types.LOAD_JOBS: {
      return [...state, ...action.payload];
    }
    default:
      return state;
  }
};
