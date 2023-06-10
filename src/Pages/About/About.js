

import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import AboutMe from './AboutMe';
import Movies from './TawheedLike/Movies';

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an async operation
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>{loading ? (
      <Spinner />
    ) : (
      <div>
        <AboutMe></AboutMe>
        <Movies></Movies>
      </div>
    )}
    </div>

  );
};

export default About;
