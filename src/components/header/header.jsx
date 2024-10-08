import toggleMenu from "./header-component";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="inset-x-0 top-0 z-50 bg-slate-800 text-white ">
      <nav
        className="flex items-center justify-between p-4 lg:px-8 text-white"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5 flex gap-2 items-center">
            <img
              className="h-6 lg:h-8 w-auto"
              src="img/film_camera.png"
              alt=""
            />
            <p className="text-white text-md lg:text-lg font-semibold">
              ImgBox
            </p>
          </NavLink>
        </div>
        <div className="flex lg:hidden text-white" onClick={toggleMenu}>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 text-white">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Services
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Shipping
          </a>
          <NavLink
            to="/landingpage"
            className="text-sm font-semibold leading-6 text-white"
          >
            About
          </NavLink>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      {/* Mobile menu, show/hide based on menu open state. */}
      <div className="hidden" role="dialog" aria-modal="true" id="header-menu">
        {/* Background backdrop, show/hide based on slide-over state. */}
        <div className="fixed inset-0 z-50"></div>
        <div className="fixed inset-y-0 right-0 z-50 h-fit w-full overflow-y-auto bg-slate-800 text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="img/film_camera.png" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={toggleMenu}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Shipping
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  How it Works
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
