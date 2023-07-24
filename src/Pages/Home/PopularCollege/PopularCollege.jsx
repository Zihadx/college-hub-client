import { useEffect, useState } from "react";
import PopularCollegeCard from "./PopularCollegeCard";

const PopularCollege = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("https://college-hub-server-five.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-center font-bold">
        Popular <span className="text-[#f16736]">college</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {colleges.slice(0, 3).map((college) => (
            <PopularCollegeCard key={college.id} college={college}></PopularCollegeCard>
        ))}
      </div>
    </div>
  );
};

export default PopularCollege;
