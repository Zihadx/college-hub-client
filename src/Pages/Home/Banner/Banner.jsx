const Banner = () => {
  return (
    <div className="my-16">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/TLZR1Bx/hercules-hall-surrounded-by-greenery-sunlight-daytime-munich-germany-2.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold uppercase">
              Welcome to our <span className="text-[#f16736]">university</span>
            </h1>
            <p className="mb-5">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </p>
            <button className="btn btn-ghost text-white hover:text-black hover:bg-accent bg-[#f16736] mr-2">
              All course
            </button>
            <button className="btn btn-outline text-white hover:text-black hover:bg-accent">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
