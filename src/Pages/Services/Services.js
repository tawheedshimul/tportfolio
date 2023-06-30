import React from "react";
import Card from "./Card";
import servicesData from "./services.json";

const Services = () => {
    return (
        <div className="container mx-auto flex justify-center">
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4 ">
                {servicesData.services.map((service, index) => (
                    <Card key={index} {...service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
