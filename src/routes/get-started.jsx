import "../../src/App.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function GetStarted() {
  return (
    <div className="sm:w-full" id="getstarted">
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
      </div>
      <Footer />
    </div>
  );
}
