/* eslint-disable react/prop-types */
const PopularCollegeCard = ({ college }) => {
  const { college_name, college_image, admission_dates } = college;
  return (
    <div className="card card-compact bg-base-100 shadow-xl rounded">
      <figure className="hover:transform hover:scale-y-110 transition-all duration-300">
        <img className="hover:transition-opacity" src={college_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{college_name}</h2>
        <div>
          <p>Admission Start: {admission_dates.fall}</p>
          <p>Admission End: {admission_dates.spring}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-md btn-ghost text-white hover:text-black hover:bg-accent bg-[#f16736]">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularCollegeCard;
