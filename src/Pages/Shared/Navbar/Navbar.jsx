import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsScrolled(scrollPosition > 0);
  }, [scrollPosition]);

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="allCollege">Colleges</Link>
      </li>
      <li>
        <Link to="admission">Admission</Link>
      </li>
      <li>
        <Link to="myCollege">My College</Link>
      </li>
    </>
  );
  return (
    <>
      <div
        className={`navbar fixed top-0 z-10 bg-base-100 max-w-screen-xl mx-auto w-full h-20 uppercase ${
          isScrolled ? "shadow-xl h-12" : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 rounded-box w-52 text-sm font-semibold bg-slate-600 text-white"
            >
              {navItems}
            </ul>
          </div>
          <li to="/" className="flex items-center gap-2">
            <h3 className="text-2xl font-bold uppercase">
              College<span className="text-[#f16736]">Hub</span>
            </h3>
          </li>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-sm font-semibold">
            {navItems}
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-4">
          <Link to='login'>
            <button className="btn btn-md btn-ghost text-white hover:text-black hover:bg-accent bg-[#f16736]">
              Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
