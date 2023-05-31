import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Services = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div className="bg-gray-200 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">JavaScript & React Web Design</h2>
          <p className="text-lg mb-4">
            We have {services.length} services.
          </p>
          <ul className="list-disc list-inside">

            <li className="text-lg mb-2">
              {/* {
                services.map(service => <Serviceslist>
                  key={service.id}
                  service={service}
                </Serviceslist>)
              } */}
            </li>
            {/* <li className="text-lg mb-2">
              Responsive and mobile-friendly design
            </li>
            <li className="text-lg mb-2">
              User interface (UI) design and development
            </li>
            <li className="text-lg mb-2">
              Front-end development using modern web technologies
            </li>
            <li className="text-lg mb-2">
              Integration with back-end APIs and services
            </li>
            <li className="text-lg mb-2">
              Performance optimization and code refactoring
            </li> */}
          </ul>
          <p className="text-lg mt-4">
            Contact us today to discuss your JavaScript and React web design needs!
          </p>
          <div className="flex justify-center mt-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => console.log('Contact button clicked')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
