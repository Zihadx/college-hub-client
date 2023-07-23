import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto mt-8">
        <div className="max-w-md text-center">
          <img src="https://i.ibb.co/rFxd11W/pngwing-com.png" alt="" />
          <p className="text-2xl font-semibold md:text-3xl mb-8">
            {error?.message}
          </p>
          <Link to="/" className="px-8 py-3">
            <button className="btn btn-md btn-ghost text-white hover:text-black hover:bg-accent bg-[#f16736]">
              Back to homepage
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
