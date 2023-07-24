import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CollegeDetails = () => {
  const { id } = useParams();
  const collegeDetails = useLoaderData();
  console.log(collegeDetails);
  const [details, setDetails] = useState([]);
  useEffect(() => {
    if (collegeDetails) {
      const data = collegeDetails.find((college) => college.id == id);
      setDetails(data);
      console.log(data);
    }
  }, [id, collegeDetails]);
    const {college_image, college_name, events_details, admission_dates } = details;
  console.log(details)
  return (
    <div className="mt-24">
      <h3 className="text-5xl font-bold text-center">
        About <span className="text-[#f16736]">{college_name}</span>
      </h3>
      <img className="h-[400px] w-1/2 mx-auto mt-8 rounded-lg" src={college_image} alt="" />
      <div className="flex justify-between md:w-1/2 mx-auto mt-4">
      </div>
      <div>
        <h3 className="font-bold text-3xl">Event Details:</h3>
        <div className="">
          {/* <h4 className="font-bold text-xl text-[#f16736] mt-4 ">Orientation--</h4> */}
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
