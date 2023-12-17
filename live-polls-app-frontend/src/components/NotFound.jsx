import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#0066F7]">404 - Not Found</h1>
        <p className="text-gray-700">Oops! The page you are looking for doesn't exist.</p>
      </div>
    </div>
  );
};

export default NotFound;
