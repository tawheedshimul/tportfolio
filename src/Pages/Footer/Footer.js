import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BackToTopButton from './BackToTopButton';


const Footer = () => {
  const visitFacebookProfile = () => {
    window.open('https://www.facebook.com/tawheedshimul', '_blank');
  };

  const visitTwitterProfile = () => {
    window.open('https://twitter.com/tawheedshimul', '_blank');
  };

  const visitLinkedinProfile = () => {
    window.open('https://www.linkedin.com/TawheedShimul', '_blank');
  }
  return (
    <footer className="bg-gray-800 py-4">
      <BackToTopButton></BackToTopButton>
      <div className="container mx-auto text-center">
        <p className="text-gray-300">
          Copyright &copy; 2023, My Company. All rights reserved.
        </p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li>
          <FaFacebookF onClick={visitFacebookProfile} className="text-white text-lg hover:text-red-500 cursor-pointer" />
          </li>
          <li>
          <FaTwitter onClick={visitTwitterProfile} className="text-white text-lg hover:text-red-500 cursor-pointer" />
          </li>
          <li>
          <FaLinkedinIn onClick={visitLinkedinProfile} className="text-white text-lg hover:text-red-500 cursor-pointer" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;