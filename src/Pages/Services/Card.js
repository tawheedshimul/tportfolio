import React from "react";

const Card = ({ role, description, skills, image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out relative">
      <div className="relative">
        <img src={image} alt={role} className="w-full h-56 object-cover" />
        <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-black to-transparent">
          <h2 className="text-white font-semibold text-xl mb-2">{role}</h2>
        </div>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-2">
        <h4 className="text-gray-700 font-semibold mb-2">Skills:</h4>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className=" left-0 right-0 bottom-0 px-6 py-4">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full">
          See More
        </button>
      </div>
    </div>
  );
};

export default Card;
