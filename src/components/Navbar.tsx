import { useEffect, useState } from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isMobileMenuClosed, setIsMobileMenuClosed] = useState(true);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuClosed(!isMobileMenuClosed);
  };

  useEffect(() => {
    setIsMobileMenuClosed(true);
  }, [location]);

  return (
    <>
      <nav className="bg-black sticky top-0 shadow-lg z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMobileMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <Link to="/">
                  <img className="h-8 w-auto" src={logo} alt="Your Company" />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className={clsx(
                      "rounded-md px-3 py-2 text-sm font-medium text-white",
                      location.pathname === "/" ? "bg-gray-900" : ""
                    )}
                    aria-current="page"
                  >
                    Home
                  </Link>
                  <Link
                    to="/work"
                    className={clsx(
                      "rounded-md px-3 py-2 text-sm font-medium text-white",
                      location.pathname === "/work" ? "bg-gray-900" : ""
                    )}
                  >
                    Work Experience
                  </Link>
                  <Link
                    to="/projects"
                    className={clsx(
                      "rounded-md px-3 py-2 text-sm font-medium text-white",
                      location.pathname === "/projects" ? "bg-gray-900" : ""
                    )}
                  >
                    Projects
                  </Link>
                  <Link
                    to="/about"
                    className={clsx(
                      "rounded-md px-3 py-2 text-sm font-medium text-white",
                      location.pathname === "/about" ? "bg-gray-900" : ""
                    )}
                  >
                    About
                  </Link>
                  <Link
                    to="/contacts"
                    className={clsx(
                      "rounded-md px-3 py-2 text-sm font-medium text-white",
                      location.pathname === "/contacts" ? "bg-gray-900" : ""
                    )}
                  >
                    Contacts
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={clsx(isMobileMenuClosed ? "hidden" : "", "sm:hidden")}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              to="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/work"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Work Experience
            </Link>
            <Link
              to="/projects"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              About
            </Link>
            <Link
              to="/contacts"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
