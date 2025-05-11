import { useQuery } from "@tanstack/react-query";

const RecentProjectsCard = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await fetch("/api/projects");
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      return json;
    },
  });

  const projects = Array.isArray(data) ? data : [data];


  return (
    <div className="col-12 col-sm-6 col-md-6 col-xl-4">
      <div className="recent-projects-card p-4">
        <h5 className="mb-4">Recent Projects</h5>

        {isLoading && <p className="text1">Loading...</p>}
        {isError && <p className="text-danger">{error.message}</p>}

         {!isLoading && projects?.length === 0 && <p className='text-center my-4'>No projects yet 👻</p>}

        {projects
  .filter((p) => p && p.title) // Ensures only valid objects
  .slice(0, 3)
  .map((project, i) => (
    <div key={project._id || i} className="d-flex align-items-start mb-4">
      <div className="icon-box purple">
        <i className="bi bi-code"></i>
      </div>
      <div className="ms-3">
        <strong className="d-block">{project.title}</strong>
        <small className="text1">Updated recently</small>
      </div>
    </div>
))}

       {/* Only show button if there are projects */}
{projects.length > 0 && (
  <button className="but-c">View All Projects</button>
)}
      </div>
    </div>
  );
};

export default RecentProjectsCard;
