import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import BackToTopButton from './BackToTopButton';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // Logic to handle subscription form submission
    console.log('Subscribed with email:', email);
    e.target.reset();
  };

  // social link section start

  const visitFacebookProfile = () => {
    window.open('https://www.facebook.com/tawheedshimul', '_blank');
  };

  const visitTwitterProfile = () => {
    window.open('https://twitter.com/tawheedshimul', '_blank');
  };

  const visitLinkedinProfile = () => {
    window.open('https://www.linkedin.com/TawheedShimul', '_blank');
  }
  //  social link section end 


  return (
    <footer className="bg-gray-900 text-white">
      <BackToTopButton></BackToTopButton>
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8 sm:mb-0">
            <h3 className="text-xl mb-4">About Us</h3>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis tortor id nulla iaculis, ut pellentesque ex lacinia.</p>
            <ul className="flex space-x-4 mt-4">
              <li>
                <FaFacebookF onClick={visitFacebookProfile} className="text-rose-800 text-lg hover:text-red-500 cursor-pointer" />
              </li>
              <li>
                <FaTwitter onClick={visitTwitterProfile} className="text-rose-800 text-lg hover:text-red-500 cursor-pointer" />
              </li>
              <li>
                <FaLinkedinIn onClick={visitLinkedinProfile} className="text-rose-800 text-lg hover:text-red-500 cursor-pointer" />
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h3 className="text-xl mb-4">Subscribe</h3>
            <p className="text-gray-400">Stay updated with our latest news and offers.</p>
            <form onSubmit={handleSubscribe} className="mt-4">
              <input type="email" name="email" placeholder="Enter your email" required className="bg-gray-700 text-white px-4 py-2 rounded-md w-full" />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8">

          <div className="footer-info text-center">
            <p className="text-gray-400">&copy; {currentYear} My Website. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
