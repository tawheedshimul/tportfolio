import React from 'react';
import DownloadCV from './DownloadCV';

const Cv = () => {
  const fileUrl = '/public/logo192.png';
  const fileName = 'my-file.pdf';

  return (
    <div className="container mx-auto py-8">
      <DownloadCV fileUrl={fileUrl} fileName={fileName} />
    </div>
  );
};

export default Cv;
