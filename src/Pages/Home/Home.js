import React, { useEffect, useState } from 'react';
import MeetOurLeadership from './MeetOurLeadership';
import ConnectedCompany from './ConnectedCompany';
import Spinner from '../Spinner/Spinner';
import Banner from './Banner';

const Home = () => {
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
        <Banner></Banner>
        <MeetOurLeadership></MeetOurLeadership>
        <ConnectedCompany></ConnectedCompany>
      </div>
    )}
    </div>

  );
};

export default Home;
