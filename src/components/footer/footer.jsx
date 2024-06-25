function Footer() {
  return (
    <footer className="w-full bg-gray-700 text-white mt-[4rem]">
      <div className="flex flex-col w-full lg:justify-between p-4 lg:px-10 text-white lg:py-14 lg:flex-row">
        <div className="flex flex-col gap-2 mb-5 lg:mb-1 w-full lg:w-1/4 text-center lg:text-left">
          <p className="font-semibold text-2xl">Services</p>
          <a href="" className="text-white">
            <p className="font-normal">Clothing</p>
          </a>
          <a href="" className="text-white">
            <p className="font-normal">Accessories</p>
          </a>
          <a href="" className="text-white">
            <p className="font-normal">Beauty</p>
          </a>
          <a href="" className="text-white">
            <p className="font-normal">Jewelries</p>
          </a>
          <a href="" className="text-white">
            <p className="font-normal">Watches</p>
          </a>
          <a href="" className="text-white">
            <p className="font-normal">Shoes</p>
          </a>
          <a href="" className="text-white">
            <p className="font-normal">Bags</p>
          </a>
        </div>
        <div className="flex flex-col gap-2 mb-5 lg:mb-1 w-full lg:w-1/4 text-center lg:text-left">
          <p className="font-semibold text-2xl">Menu</p>
          <a href="" className="text-white">
            <p className="font-normal">Services</p>
          </a>
          <a href="" className="text-white">
            <p className="font-normal">Shipping</p>
          </a>
          <a href="" className="text-white">
            <p className="font-normal">How it Works</p>
          </a>
        </div>
        <div className="flex flex-col gap-3 mb-12 lg:mb-1 w-full lg:w-1/4 text-center lg:text-left">
          <p className="font-semibold text-2xl">Contact Us:</p>
          <p className="font-normal">hello@imgbox.com</p>
          <div className="flex w-full justify-center lg:justify-start">
            <button className="p-1 border-gray-400 bg-gray-100 rounded-none hover:bg-gray-200">
              <i class="bx bxl-facebook bx-md text-gray-600"></i>
            </button>
            <button className="p-1 border-gray-400 bg-gray-100 rounded-none hover:bg-gray-200">
              <i class="bx bxl-twitter bx-md text-gray-600"></i>
            </button>
            <button className="p-1 border-gray-400 bg-gray-100 rounded-none hover:bg-gray-200">
              <i class="bx bxl-instagram bx-md text-gray-600"></i>
            </button>
            <button className="p-1 border-gray-400 bg-gray-100 rounded-none hover:bg-gray-200">
              <i class="bx bxl-linkedin bx-md text-gray-600"></i>
            </button>
            <button className="p-1 border-gray-400 bg-gray-100 rounded-none hover:bg-gray-200">
              <i class="bx bxl-youtube bx-md text-gray-600"></i>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:gap-5 mb-5 lg:mb-1 w-full lg:w-1/3 text-center lg:text-left">
          <p className="font-semibold text-xl lg:text-2xl uppercase">
            Subscribe to our email
          </p>
          <p className="font-normal">
            Each week we send out e-commerce and content production content:
            guides, industry news, and our podcast. Hundreds of founders and
            creatives subscribe to it.
          </p>
          <input
            type="text"
            className="bg-white text-gray-800"
            placeholder="Enter email"
          />
          <button className="bg-[#0C0748] border-0 rounded text-white uppercase text-md w-fit hover:bg-[#2f2a6e] m-auto lg:ml-0">
            Subscribe
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
