import React from 'react';
import DownloadCV from './DownloadCV';

const AboutMe = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">About Me</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
             <img src="https://i.ibb.co/r2ZjV0h/57034730-285019035760717-2703654450811109376-n.jpg" alt="Profile Picture" className="w-full rounded" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
              Hi, I'm Tawheed Shimul, a passionate web developer with over 2 years of experience.
            </p>
            <p className="text-lg mb-4">
              I specialize in front-end development and enjoy creating visually appealing and interactive user interfaces.
            </p>
            <p className="text-lg mb-4">
              My skills include HTML, CSS, JavaScript, and various front-end frameworks like React and Vue.js.
            </p>
            <p className="text-lg mb-4">
              I am dedicated to delivering high-quality websites that meet client requirements and provide a great user experience.
            </p>
            <DownloadCV></DownloadCV>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;