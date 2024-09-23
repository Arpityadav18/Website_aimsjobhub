// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-4 mt-6">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h5 className="text-lg font-bold mb-2">About Us</h5>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h5 className="text-lg font-bold mb-2">Quick Links</h5>
            <ul className="list-none mb-0">
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <h5 className="text-lg font-bold mb-2 text-white">Social Media</h5>
            <ul className="list-none mb-0">
              <li className="mb-2">
                <a href="https://www.facebook.com/AIMSJOBHUB/" className="text-white hover:text-gray-500">
                  Facebook
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-gray-500">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="https://www.instagram.com/aimsjobhub/" className="text-white hover:text-gray-500">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;