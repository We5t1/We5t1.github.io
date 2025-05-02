import React, { useState } from 'react';
import { Meteors } from './ui/meteors';
import { Code } from 'lucide-react';

const workExperiences = [
  {
    company: "NC Community",
    roles: [
      { 
        title: "Full Stack Software Developer", 
        dates: "2022 – 2025",
      }
    ]
  },
  {
    company: "DARTEN-IT Group",
    roles: [
      { 
        title: "Lead Backend Software Developer", 
        dates: "Jan 2025 - April 2025"
      }
    ]
  },
  {
    company: "SnailyCAD",
    roles: [
      { 
        title: "Open Source Contributor", 
        dates: "Sept 2024 - Feb 2025",
      }
    ]
  },
];

const SkeletonLoader = () => (
  <div className='animate-pulse space-y-4 p-6 rounded-lg border border-gray-700 bg-gray-800 w-full max-w-2xl'>
    <div className="h-6 bg-gray-700 rounded w-3/4"/>
    <div className="h-4 bg-gray-700 rounded w-1/2"/>
    <div className="h-4 bg-gray-700 rounded w-2/3"/>
  </div>
);

const ExperienceCard = ({ experience }) => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="w-full max-w-2xl border border-gray-200 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all p-6  mx-auto">
      <h3 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500 mb-6">
        {experience.company}
      </h3>
      
      <div className="space-y-4 text-gray-800">
        {experience.roles.map((role, index) => (
          <div key={index} className="flex justify-between items-start border-b border-gray-100 pb-4">
            <div className="text-center w-full">
              <p className="text-lg font-semibold mb-2">{role.title}</p>
              <p className="text-sm text-gray-600">{role.dates}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        onClick={scrollToProjects}
        className="mt-6 w-full py-2 bg-gradient-to-r from-green-500 to-yellow-500 text-white rounded-lg hover:opacity-90 transition-opacity"
      >
        View Projects
      </button>
    </div>
  );
};



export const WorkExperienceList = () => (
  // Remove background color and adjust padding
  <div className="flex items-center justify-center flex-col py-12 sm:py-16 lg:py-20 bg-white">
    <div className="text-center mb-8 px-4">
      <h1 className="text-3xl font-bold text-black sm:text-4xl xl:text-5xl">
        Work Experience
      </h1>
    </div>

    {/* Mobile-optimized grid */}
    <div className="grid grid-cols-1 gap-6 w-full px-4 max-w-2xl md:max-w-7xl md:grid-cols-2 lg:grid-cols-3">
      {workExperiences.map((exp) => (
        <div key={exp.company} className="relative w-full">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg md:shadow-xl hover:shadow-green-500/20 transition-all h-full mx-2">
            {/* Mobile-optimized header */}
            <div className="flex items-center gap-3 mb-4 flex-col sm:flex-row">
              <Code className="h-8 w-8 bg-gradient-to-r from-green-500 to-yellow-500 text-white p-1 rounded-lg" />
              <h3 className="text-xl sm:text-2xl font-bold text-center sm:text-left bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500">
                {exp.company}
              </h3>
            </div>
            
            {/* Mobile-optimized content */}
            <div className="space-y-4 text-gray-700">
              {exp.roles.map((role, index) => (
                <div key={index} className="border-b border-gray-100 pb-3">
                  <p className="text-base sm:text-lg font-semibold text-gray-900">{role.title}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{role.dates}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
// Keep the original CardList export if needed
const CardList = ({ cards }) => {
  // Your original card list implementation
};

export default CardList;