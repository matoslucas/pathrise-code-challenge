import { JobType } from "../types";

class Services {
  postJob = (job: JobType) => {
    localStorage.setItem(job.id, JSON.stringify(job));
  };

   getJobs = async() => {
    await null;
    let i: number;
    let len: number;
    let list: Array<JobType> = [];

    for (i = 0, len = localStorage.length; i < len; ++i) {
      const key: string | null = localStorage.key(i);
      if (key) {
        console.log(localStorage.getItem(key));
        const data = localStorage.getItem(key);
        if (data) {
          list.push(JSON.parse(data));
        }
      }
    }

    return { data: list};
  };

  updateJob = (id: string, job: JobType) => {
    localStorage.setItem(id, JSON.stringify(job));
    const data = localStorage.getItem(id);

    return data;
  };

  deleteJob = (id: string) => {
    localStorage.removeItem(id);
  };
}

export default new Services();
