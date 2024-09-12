import { NavLink } from "react-router-dom";
import { HeroCarousel } from "../carousel/carousel";

function LandingPage() {
  return (
    <section className="w-full flex flex-col gap-2 items-center text-center mt-[3rem] lg:mt-[4rem] justify-center">
      <h2 className="text-4xl text-gray-900 font-serif">
        Where <span className="text-orange-600">Magic</span> Happens
      </h2>
      <NavLink
        to="getstarted"
        className="mt-4 w-fit px-6 lg:px-10 py-1 rounded-none text-lg bg:text-2xl uppercase font-thin bg-[#0C0748] text-white hover:bg-[#27225c] hover:text-white cssanimation lightning"
      >
        Get Started
      </NavLink>
      <div className="w-full h-[80vh] mt-20 flex justify-center">
        <img
          src="img/app-mockup.jpg"
          alt=""
          className="w-3/4 object-cover object-top h-full"
        />
      </div>
      <div className="w-full mt-40 flex flex-col items-center justify-center">
        <h3 className="text-3xl font-thin text-gray-700">
          Product shots delivered on time
        </h3>
        <p className="text-lg mt-4 mb-24 text-gray-700 w-1/2">
          We take care of shooting so that you can focus on selling. Get your
          shots in 8 business days or less after payment is made.
        </p>
      </div>

      <div className="w-full">
        <HeroCarousel />
      </div>
      <div className="w-full mt-40 flex flex-col items-center justify-center">
        <h3 className="text-3xl font-thin text-gray-700">
          All photography categories are available
        </h3>
        <p className="text-lg mt-4 mb-20 text-gray-700 w-1/2">
          Whatever category of photos you want, we can deliver.
        </p>
      </div>
      <div className="w-full h-fit flex justify-center">
        <img
          src="img/categories.png"
          alt=""
          className="w-3/4 object-contain object-top h-full"
        />
      </div>
      <div className="w-full mt-40 flex flex-col items-center justify-center">
        <h3 className="text-3xl font-thin text-gray-700 mb-20">
          Some of Our Clients
        </h3>
      </div>
      <div className="w-full h-[70vh] flex justify-center">
        <img
          src="img/clients.png"
          alt=""
          className="w-3/4 object-contain object-top h-full"
        />
      </div>
    </section>
  );
}

export default LandingPage;
