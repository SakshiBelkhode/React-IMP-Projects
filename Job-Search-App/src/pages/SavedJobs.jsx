import { useContext } from "react";
import { JobContext } from "../context/JobContext";

const SavedJobs = () => {
  const { savedJobs, removeJob } = useContext(JobContext);

  return (
    <div>
      <h2>⭐ Saved Jobs</h2>

      {savedJobs.map((job) => (
        <div key={job.id}>
          <h4>{job.title}</h4>
          <button onClick={() => removeJob(job.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default SavedJobs;