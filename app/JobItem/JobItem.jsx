import  { useContext } from "react";
import jobIcon from "/Group.png";
import { TiBookmark } from "react-icons/ti";
import { Link } from "react-router-dom";
import { JobContext } from "../../Context";

export default function JobItem() {
  const { filteredJobs } = useContext(JobContext);
 
  return (

      <div>

        {
         filteredJobs.map(job =><div job={job.id}>
          <Link
      to={`/job-description/${job.id}`}
      // state={{ job }}
      className="flex flex-col lg:flex-row p-6 shadow-lg inset-shadow-sm mt-10 gap-6"
    >
      {/* Left Part */}
      <div className="flex flex-col lg:flex-row flex-1">
        <div>
          <img src={jobIcon} alt="Company Logo" />
        </div>
        <div className="flex flex-col gap-2 mt-4 lg:mt-0 lg:ms-6">
          <h1 className="text-xl font-semibold">{job.job_title}</h1>
          <div className="flex flex-wrap font-normal text-[#5E6670] gap-1">
            <p className="text-base">{job.company} |</p>
            <p className="text-base">{job.location}</p>
          </div>

          <div className="flex flex-wrap font-normal items-center gap-2 mt-2">
            <p className="text-[#9199A3] bg-[#F1F2F4] rounded-3xl px-3 py-1">
              {job.job_type}
            </p>
            <span className="hidden lg:inline">|</span>
            <p className="text-base text-[#0A65CC] border border-[#0A65CC] rounded-3xl px-3 py-1">
              {job.salary_range}
            </p>
          </div>
        </div>
      </div>

      {/* Right Part */}
      <div className="flex flex-col gap-5 lg:items-end w-full lg:w-auto">
        <div className="w-full lg:w-[215px] text-left lg:text-right">
          <div className="w-full h-1.5 mb-2 bg-gray-200 relative">
            <div
              className="absolute top-0 left-0 h-full bg-gray-500"
              style={{ width: `${(10 / 200) * 100}%` }}
            />
          </div>
          <p className="font-normal text-base text-gray-600">
            10 applicants on 200 posts
          </p>
        </div>

        <div className="flex flex-col sm:flex-row w-full lg:w-auto gap-3">
          <button className="w-full sm:w-14 text-[#0A65CC] text-2xl border rounded border-[#0A65CC]">
            <TiBookmark size={30} className="mx-auto" />
          </button>
          <button className="w-full sm:w-auto text-base text-white bg-[#0A65CC] px-6 py-3 rounded">
            Apply now
          </button>
        </div>
      </div>
    </Link>


         </div>)
        }

      </div>
    
  );
}
