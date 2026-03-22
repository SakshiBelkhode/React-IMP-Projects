import { createContext, useState, useEffect } from "react";

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [savedJobs, setSavedJobs] = useState(() => {
    return JSON.parse(localStorage.getItem("savedJobs")) || [];
  });

  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  }, [savedJobs]);

  const saveJob = (job) => {
    const exist = savedJobs.find((j) => j.id === job.id);
    if (!exist) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  const removeJob = (id) => {
    setSavedJobs(savedJobs.filter((j) => j.id !== id));
  };

  return (
    <JobContext.Provider
      value={{ savedJobs, saveJob, removeJob }}
    >
      {children}
    </JobContext.Provider>
  );
};