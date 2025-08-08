import React, { useState, useEffect } from "react";
import JobData from "../data/job"; // ✅ তোমার job data
import { JobContext } from ".";

export const JobProvider = ({ children }) => {
  const [jobs] = useState(JobData); // full job list
  const [loading] = useState(false);

  const [filteredJobs, setFilteredJobs] = useState(JobData);

  // Filter UI state (checkbox)
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Applied filters (button press)
  const [appliedJobTypes, setAppliedJobTypes] = useState([]);
  const [appliedCategories, setAppliedCategories] = useState([]);

  // ✅ Checkbox toggle handlers
  const toggleJobType = (type) => {
    setSelectedJobTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  // ✅ Apply filters
  const applyFilters = () => {
    setAppliedJobTypes(selectedJobTypes);
    setAppliedCategories(selectedCategories);
  };

  // ✅ Filtering logic - runs when applied filters change
  useEffect(() => {
    let filtered = [...jobs];

    // Filter by job type
    if (appliedJobTypes.length > 0) {
      filtered = filtered.filter((job) =>
        appliedJobTypes.includes(job.job_type)
      );
    }

    // Filter by category
    if (appliedCategories.length > 0) {
      filtered = filtered.filter((job) =>
        appliedCategories.includes(job.category)
      );
    }

    setFilteredJobs(filtered);
  }, [jobs, appliedJobTypes, appliedCategories]);

  return (
    <JobContext.Provider
      value={{
        jobs,
        loading,
        selectedJobTypes,
        selectedCategories,
        toggleJobType,
        toggleCategory,
        applyFilters,
        filteredJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
