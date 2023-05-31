import React from 'react';

const Serviceslist = ({service}) => {
    const {name} = service;
    return (
        <div>
            Name:{name}
        </div>
    );
};

export default Serviceslist;