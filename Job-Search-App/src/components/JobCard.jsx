import { Link } from "react-router-dom";
import { useContext } from "react";
import { JobContext } from "../context/JobContext";

const JobCard = ({ job }) => {
  const { saveJob } = useContext(JobContext);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        width: "250px",
      }}
    >
      <h4>{job.title}</h4>
      <p>{job.company_name}</p>

      <Link to={`/job/${job.id}`}>View</Link>

      <button onClick={() => saveJob(job)}>
        ⭐ Save Job
      </button>
    </div>
  );
};

export default JobCard;