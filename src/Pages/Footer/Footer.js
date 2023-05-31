import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-300">
          Copyright &copy; 2023, My Company. All rights reserved.
        </p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li>
            <Link href="https://www.facebook.com/mycompany" target="_blank">
              <FaFacebookF className="text-white text-lg" />
            </Link>
          </li>
          <li>
            <Link href="https://www.twitter.com/mycompany" target="_blank">
              <FaTwitter className="text-white text-lg" />
            </Link>
          </li>
          <li>
            <Link to="/linkedin" target="_blank">
              <FaLinkedinIn className="text-white text-lg" />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;