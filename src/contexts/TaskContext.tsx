import React, { createContext, useReducer, Dispatch } from "react";
import { jobReducer, JobActions } from "../reducers/TaskReducer";

import { JobType } from "../types";

type InitialStateType = {
  jobs: JobType[];
};

const initialState = {
  jobs: [],
};

export const JobContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<JobActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
};

const JobContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(jobReducer, []);

  const sortedJobs = state.sort((t, f) =>
    f.isDeleted === t.isDeleted ? 0 : f.isDeleted ? -1 : 1
  );

  return (
    <JobContext.Provider value={{ state: { jobs: sortedJobs }, dispatch }}>
      {children}
    </JobContext.Provider>
  );
};
export default JobContextProvider;
