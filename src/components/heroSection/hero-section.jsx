import { Form, NavLink } from "react-router-dom";
import { HeroCarousel } from "../carousel/carousel";
import "../heroSection/hero-section.css";

function HeroSection() {
  return (
    <section className="w-full flex flex-col gap-2 items-center text-center mt-[3rem] lg:mt-[4rem] justify-center">
      <h2 className="text-4xl text-gray-900 font-serif">Welcome</h2>
      <p className=" text-gray-700 px-8">
        Hey, we'll take care of the photography stuff so you can focus on making
        those sales!
      </p>
      <NavLink
        to="getstarted"
        className="mt-4 w-fit px-6 lg:px-10 py-1 rounded-none text-lg bg:text-2xl uppercase font-thin bg-[#0C0748] text-white hover:bg-[#27225c] hover:text-white"
      >
        Get Started
      </NavLink>
      <div className="w-full">
        <HeroCarousel />
      </div>
      <div className="w-full py-10 flex flex-col gap-2 items-center text-center mt-8 lg:mt-[5rem]">
        <h2 className="text-2xl lg:text-3xl text-gray-700 font-serif">
          What our clients have to say
        </h2>
        <div className="w-full flex flex-col lg:flex-row gap-3 justify-center items-center mt-6">
          <div className="w-[23rem] h-[26rem] px-8 py-6 flex flex-col items-center drop-shadow-lg bg-white ">
            <img
              src="img/profile_1.jpg"
              alt=""
              className="rounded-full w-[4rem] h-[4rem] object-cover object-top"
            />
            <p className="text-lg text-gray-800 mt-6">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur sapien dolor, ornare ut lacinia non, euismod eget elit.
              In hac habitasse platea dictumst. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos."
            </p>
            <div className="text-gray-500 font-bold text-pretty mt-4">
              Claire Bennet{" "}
              <span className=" text-sm font-normal">- Google</span>
            </div>
          </div>
          <div className="w-[23rem] h-[26rem] px-8 py-6 flex flex-col items-center drop-shadow-lg bg-white ">
            <img
              src="img/profile_2.jpg"
              alt=""
              className="rounded-full w-[4rem] h-[4rem] object-cover object-top"
            />
            <p className="text-lg text-gray-800 mt-6">
              "Lorem ipsum dolor sit amet, euismod eget elit. In hac habitasse
              platea dictumst. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos."
            </p>
            <div className="text-gray-500 font-bold text-pretty mt-4">
              Mathew John
              <span className=" text-sm font-normal"> - Mary Kay</span>
            </div>
          </div>
          <div className="w-[23rem] h-[26rem] px-8 py-6 flex flex-col items-center drop-shadow-lg bg-white ">
            <img
              src="img/profile_3.jpg"
              alt=""
              className="rounded-full w-[4rem] h-[4rem] object-cover object-top"
            />
            <p className="text-lg text-gray-800 mt-6">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur sapien dolor, ornare ut lacinia non, euismod eget elit.
              In hac habitasse platea dictumst. Ad litora torquent per conubia
              nostra, per inceptos himenaeos."
            </p>
            <div className="text-gray-500 font-bold text-pretty mt-4">
              Dan Okoro
              <span className=" text-sm font-normal"> - AWS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
