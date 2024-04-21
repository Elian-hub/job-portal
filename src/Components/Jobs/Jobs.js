import Jobss from "./Jobs.module.css";
import Jobsdisplay from "./Jobsdisplay";

const Jobs = () => {
  const jobss = [
    {
      name: "Watchman",
      description: "School watchman",
      location: "Kesses",
      salary: 10000,
    },
    {
      name: "Teacher",
      description: "Lower Primary",
      location: "Chep",
      salary: 45000,
    },
    {
      name: "Software Developer",
      description: "Full Stack",
      location: "Remote",
      salary: 40000,
    },
  ];
  return (
    <div>
      <h1>Jobs</h1>
      {jobss.map((elem) => (
        <Jobsdisplay
          name={elem.name}
          description={elem.description}
          location={elem.location}
          salary={elem.salary}
        ></Jobsdisplay>
      ))}
    </div>
  );
};

export default Jobs;
