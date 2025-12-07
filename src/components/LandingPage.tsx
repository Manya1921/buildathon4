// eslint-disable-next-line
import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">ResumeX</h1>
      <p className="text-xl text-gray-700 mb-8 text-center">Your professional resume builder for ATS-friendly and stunning resumes.</p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
        Create My Resume
      </button>
    </div>
  );
};

export default LandingPage;
