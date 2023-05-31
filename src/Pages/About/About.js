import React from 'react';
import DownloadCV from './DownloadCV';

const About = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">About Me</h1>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Profile Picture"
              className="w-full rounded"
            />
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

export default About;
