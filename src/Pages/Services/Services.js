import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Serviceslist from './Serviceslist';


const Services = () => {
  const services = useLoaderData();
  console.log(services);
  return (
    <div className='container mx-auto p-4'>
      <p className="text-lg mb-4">
        We have {services.length} services.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          services.map(service => <Serviceslist
            service={service}
          ></Serviceslist>)
        }
      </div>
    </div>
  );
};

export default Services;
