import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    fetch("https://remotive.com/api/remote-jobs")
      .then((res) => res.json())
      .then((data) => {
        const found = data.jobs.find((j) => j.id === Number(id));
        setJob(found);
      });
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.company_name}</p>
      <p dangerouslySetInnerHTML={{ __html: job.description }} />
    </div>
  );
};

export default JobDetails;