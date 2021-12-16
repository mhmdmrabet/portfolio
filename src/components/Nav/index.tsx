import { useState } from 'react';

export const Nav = () => {
  const [hiddenMobileMenu, setHiddenMobileMenu] = useState(true);
  const classNameMobileMenu = `md:hidden ${hiddenMobileMenu ? 'hidden' : ''}`;
  return (
    <nav className="bg-gray-900">
      <div className="px-8 mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className="">
              <a href="#" className="flex items-center py-5 px-2 text-white hover:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-0.2 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                  />
                </svg>
                <span className="font-bold">Mohamed</span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-5 px-3 text-white hover:text-gray-300">
              Projects
            </a>
            <a href="#" className="py-5 px-3 text-white hover:text-gray-300">
              Contact
            </a>
          </div>
          {/* MOBILE BUTTON */}
          <div className="md:hidden flex items-center text-white">
            <button type="button" onClick={() => setHiddenMobileMenu(!hiddenMobileMenu)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* MOBILE MENU */}
      <div className={classNameMobileMenu}>
        <a href="#" className="block py-2 px-4 text-sm hover:text-gray-300 text-center text-white">
          Projects
        </a>
        <a href="#" className="block py-2 px-4 text-sm hover:text-gray-300 text-center text-white">
          Contact
        </a>
      </div>
    </nav>
  );
};
