import React from 'react';

const Serviceslist = ({ service }) => {
  const { image, name, email, phone } = service;
  console.log(service);
  return (

    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{email}</p>
        <p className="text-gray-700 font-bold mt-2">Cell No :- {phone}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          See More
        </button>
      </div>
    </div>

  );
};

export default Serviceslist;