// Header.js
import React from 'react';

function Header() {
  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto p-4">
        <nav className="flex justify-between">
          <div className="flex items-center">
            <a href="" className="text-lg font-bold">
            AIMS JOB HUB
            </a>
          </div>
          <ul className="flex items-center">
            <li className="mr-4">
              <a href="#" className="text-white hover:text-gray-200">
                Home
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-white hover:text-gray-200">
                About
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="text-white hover:text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;