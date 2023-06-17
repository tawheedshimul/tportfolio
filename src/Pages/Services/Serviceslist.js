import React from 'react';

const Serviceslist = ({service}) => {
    const {name, email, phone} = service;
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center mb-4">
          <img className="w-10 h-10 rounded-full mr-4" src="profile-image.jpg" alt="Profile" />
          <div>
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-600">Frontend Developer</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend euismod urna,
          in hendrerit nisl aliquam sed. Proin sed neque eget ex dictum tincidunt.
        </p>
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-bold mb-2">Skills</h3>
            <ul className="text-gray-700">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p className="text-gray-700">{email}</p>
            <p className="text-gray-700">{phone}</p>
          </div>
        </div>
      </div>
  );
};

export default Serviceslist;