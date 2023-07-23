import { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";

const Colleges = () => {
    const [colleges, setColleges] = useState([]);
    useEffect(() => {
      fetch("fake.json")
        .then((res) => res.json())
        .then((data) => setColleges(data));
    }, []);
    return (
        <div className="mt-24">
            <h4 className="text-5xl font-bold text-center">All Colleges</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
            {colleges.map((college) => (
            <CollegeCard key={college.id} college={college}></CollegeCard>
        ))}
            </div>
        </div>
    );
};

export default Colleges;