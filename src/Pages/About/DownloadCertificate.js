import React from 'react';

const DownloadCertificate = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?id=18xtGDIu8jL3l0BTvlMz4lym1Uq31WZE2&export=download';
        link.download = 'WD Certificate.pdf';
        link.click();
    };

    return (
        <div className="bg-white shadow rounded p-4 text-center">
            <h2 className="text-xl font-semibold mb-4">Web developer Certificate</h2>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                onClick={handleDownload}
            >
                Download Certificate
            </button>
        </div>
    );
};

export default DownloadCertificate;