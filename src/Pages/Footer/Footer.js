import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import BackToTopButton from './BackToTopButton';


const Footer = () => {

  const currentYear = new Date().getFullYear();

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
    <footer className="text-white bg-gradient-to-r from-gray-200 via-pink-500 to-gray-500 py-4">
      <BackToTopButton></BackToTopButton>
      <div className="container mx-auto text-center">
        <p className="text-xl ">
          Copyright &copy; 2022 - {currentYear}, My Company. All rights reserved.
        </p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li>
            <FaFacebookF onClick={visitFacebookProfile} className="text-white animate-spin text-lg hover:animate-none cursor-pointer" />
          </li>
          <li>
            <FaTwitter onClick={visitTwitterProfile} className="text-white animate-spin text-lg hover:animate-none cursor-pointer" />
          </li>
          <li>
            <FaLinkedinIn onClick={visitLinkedinProfile} className="text-white animate-spin text-lg hover:animate-none cursor-pointer" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;