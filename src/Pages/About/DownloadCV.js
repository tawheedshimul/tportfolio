import React from 'react';

const DownloadCV = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?id=1rGLpAz2uhkb5NBDNa3OMLwG73jKGwzt5&export=download';
    link.download = 'TawheedCv.pdf';
    link.click();
  };

  return (
    <div className="bg-black shadow rounded p-4 text-center">
      <h2 className="text-xl font-semibold mb-4">Download</h2>
      <button
        className="bg-red-800 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        onClick={handleDownload}
      >
        Download CV
      </button>
    </div>
  );
};

export default DownloadCV;

