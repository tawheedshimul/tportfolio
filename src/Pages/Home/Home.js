import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-center mb-8">
          Hi, I'm John Doe, a passionate web developer.
        </p>
        <p className="text-lg text-center mb-8">
          I specialize in creating responsive and user-friendly websites.
        </p>
        <p className="text-lg text-center mb-8">
          Take a look at my projects below!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Add your project cards or thumbnails here */}
          {/* Example: */}
          <div className="bg-white p-4 shadow rounded">
            <img
              src="project-thumbnail.jpg"
              alt="Project Thumbnail"
              className="w-full mb-4 rounded"
            />
            <h3 className="text-xl font-bold mb-2">Project Title</h3>
            <p className="text-lg mb-4">Description of the project.</p>
            <a
              href="/projects/project1"
              className="text-blue-500 hover:text-blue-700"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
