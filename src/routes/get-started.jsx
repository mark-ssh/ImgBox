import "../../src/App.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { NavLink } from "react-router-dom";

export default function GetStarted() {
  return (
    <div className="sm:w-full">
      <Header />
      <div className="w-full p-8">
        <h2 className="text-2xl font-serif">Services</h2>
        <p className="">What do you plan to shoot?</p>
        <div className="flex gap-8 mt-6">
          <button className="w-[9rem] group flex flex-col border-2 border-white bg-none overflow-hidden  bg-transparent justify-start gap-0 focus:border-blue-600 focus:border-2 focus:border-solid rounded-none p-0 hover:border-2 hover:border-white">
            <img
              src="/img/clothing.png"
              alt=""
              className="w-full object-cover object-top h-[9.2rem] scale-[1.1] hover:scale-[1] group-focus:scale-[1] transition ease-in-out"
            />
            <span className="w-full h-[28px] font-thin bg-[#0C0748] z-[2] text-white hover:bg-[#27225c] hover:text-white flex items-center justify-center">
              Clothing
            </span>
          </button>
          <button className="w-[9rem] group flex flex-col border-2 border-white bg-none overflow-hidden  bg-transparent justify-start gap-0 focus:border-blue-600 focus:border-2 focus:border-solid rounded-none p-0 hover:border-2 hover:border-white">
            <img
              src="/img/beauty.png"
              alt=""
              className="w-full object-cover object-top h-[9.2rem] scale-[1.1] hover:scale-[1] group-focus:scale-[1] transition ease-in-out"
            />
            <span className="w-full h-[28px] font-thin bg-[#0C0748] z-[2] text-white hover:bg-[#27225c] hover:text-white flex items-center justify-center">
              Beauty
            </span>
          </button>
          <button className="w-[9rem] group flex flex-col border-2 border-white bg-none overflow-hidden  bg-transparent justify-start gap-0 focus:border-blue-600 focus:border-2 focus:border-solid rounded-none p-0 hover:border-2 hover:border-white">
            <img
              src="/img/accessories.png"
              alt=""
              className="w-full object-cover object-top h-[9.2rem] scale-[1.1] hover:scale-[1] group-focus:scale-[1] transition ease-in-out"
            />
            <span className="w-full h-[28px] font-thin bg-[#0C0748] z-[2] text-white hover:bg-[#27225c] hover:text-white flex items-center justify-center">
              Accessories
            </span>
          </button>
          <button className="w-[9rem] group flex flex-col border-2 border-white bg-none overflow-hidden  bg-transparent justify-start gap-0 focus:border-blue-600 focus:border-2 focus:border-solid rounded-none p-0 hover:border-2 hover:border-white">
            <img
              src="/img/shoes.png"
              alt=""
              className="w-full object-cover object-top h-[9.2rem] scale-[1.1] hover:scale-[1] group-focus:scale-[1] transition ease-in-out"
            />
            <span className="w-full h-[28px] font-thin bg-[#0C0748] z-[2] text-white hover:bg-[#27225c] hover:text-white flex items-center justify-center">
              Shoes
            </span>
          </button>
        </div>
        <h2 className="text-2xl font-serif mt-12">Photo Type</h2>
        <p className="">What type of photo do you prefer?</p>
        <div className="flex gap-8 mt-6">
          <button className=" uppercase px-4 py-1 border-2 bg-white hover:bg-gray-300 border-gray-300 hover:border-blue-600 hover:border-2 hover:border-solid border-solid rounded-none ">
            Model photography
          </button>
          <button className=" uppercase px-4 py-1 border-2 bg-white hover:bg-gray-300 border-gray-300 hover:border-blue-600 hover:border-2 hover:border-solid border-solid rounded-none ">
            Ghost photography
          </button>
          <button className=" uppercase px-4 py-1 border-2 bg-white hover:bg-gray-300 border-gray-300 hover:border-blue-600 hover:border-2 hover:border-solid border-solid rounded-none ">
            Catalog photography
          </button>
        </div>
        <h2 className="text-2xl font-serif mt-12">Number of Photos</h2>
        <p className="">Enter your prefered number of photos</p>
        <input
          type="text"
          className="p-2 mt-2 rounded bg-slate-200 border-gray-300"
          placeholder="Enter"
        />
        <h2 className="text-2xl font-serif mt-12">Other Information</h2>
        <p className="">Enter required informations</p>
        <div className="flex items-center justify-between w-full gap-2 flex-wrap">
          <input
            type="text"
            className="p-2 mt-2 rounded bg-slate-200 border-gray-300 w-[32.5%]"
            placeholder="Enter Your Name"
          />
          <input
            type="text"
            className="p-2 mt-2 rounded bg-slate-200 border-gray-300 w-[32.5%]"
            placeholder="Enter Email"
          />
          <input
            type="text"
            className="p-2 mt-2 rounded bg-slate-200 border-gray-300 w-[32.5%]"
            placeholder="Enter Phone Number"
          />
        </div>
        <input
          type="text"
          className="p-2 mt-3 rounded bg-slate-200 border-gray-300 w-full"
          placeholder="Enter Your Address"
        />
        <textarea
          name=""
          id=""
          placeholder="Enter other text"
          className="mb-4 p-2 mt-3 rounded bg-slate-200 border-gray-300 w-full h-[8rem] resize-none"
        ></textarea>
        <NavLink
          to="userdashboard"
          className=" w-fit px-6 py-2 lg:px-10 rounded-none uppercase font-thin bg-[#0C0748] text-white hover:bg-[#27225c] hover:text-white"
        >
          Send Request
        </NavLink>
      </div>
      <Footer />
    </div>
  );
}
