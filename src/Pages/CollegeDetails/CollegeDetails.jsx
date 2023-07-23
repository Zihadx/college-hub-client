import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CollegeDetails = () => {
  const { id } = useParams;
  const collegeDetails = useLoaderData();
  console.log(collegeDetails);
  const [details, setDetails] = useState(null);
  useEffect(() => {
    if (collegeDetails) {
      const data = collegeDetails.find((college) => college.id == id);
      setDetails(data);
      console.log(data);
    }
  }, [collegeDetails, id]);
  //   const {college_image, admission_dates } = details;
  console.log(details)
  return (
    <div className="mt-24">
      <h3>
        About <span className="text-[#f16736]">{}</span>
      </h3>
    </div>
  );
};

export default CollegeDetails;
