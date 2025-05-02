import React, { useState } from 'react';
import { Meteors } from "./ui/meteors";
import { Github, Info, X } from "lucide-react";
import BTD from "../images/BTD.png";
import BTD2 from "../images/BTD2.png";
import BTD3 from "../images/BTD3.png";
import SCad1 from "../images/SCad1.png";
import NCDocs from "../images/NCDocs.png";
import NCDocs2 from "../images/NCDocs2.png";
import NCDocs3 from "../images/NCDocs3.png";
import NCForum from "../images/NCForum.png";
import NCForum2 from "../images/NCForum2.png";
import SCad2 from "../images/SCad2.png";
import SCad3 from "../images/SCad3.png";

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedScreenshot, setSelectedScreenshot] = useState(null);

  const projects = [
    {
      name: "SnailyCAD",
      image: SCad1,
      screenshots: [SCad1, SCad2, SCad3],
      github: "https://github.com/SnailyCAD/snaily-cadv4",
      stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker"],
      description: "Advanced CAD system for roleplay communities with real-time dispatch features.",
      tools: ["Prisma", "TRPC", "Tailwind CSS", "AWS", "Middleware"]
    },
    {
      name: "BTD Phone Shop",
      image: BTD,
      screenshots: [BTD, BTD2, BTD3],
      github: "https://github.com/art1xee/college-practice",
      stack: ["TypeScript", "React", "Next.js", "PostgreSQL", "Linux", "Cloudinary"],
      description: "Created this project for college with friends. Main idea requested by the teacher - you can sell and buy used phones, secure user system with registrations, logins, phone numbers and much more.",
      tools: ["Next.js", "Prisma", "Tailwind CSS", "CSS", "REST APIs", "Payment Integration", "NextAuth"]
    },
    {
      name: "NC Docs",
      image: NCDocs,
      screenshots: [NCDocs, NCDocs2, NCDocs3],
      stack: ["JavaScript", "CSS", "Node.js", "NoSQL", "Linux"],
      description: "Maintained two documentation websites both for users and developers using different tools.",
      tools: ["Node.js", "Docusaurus", "CSS", "REST APIs"]
    },
    {
      name: "NC Forum",
      image: NCForum2,
      screenshots: [NCForum, NCForum2],
      stack: ["TypeScript", "React", "Next.js", "PostgreSQL", "Linux", "Cloudinary"],
      description: "Forum website for NC Community used for user engagment and much more. Full of security features for administrators and users.",
      tools: ["Next.js", "Prisma", "Tailwind CSS", "CSS", "REST APIs"]
    },
  ];
    

  return (
    <section id="projects" className="py-12 sm:py-16 bg-gradient-to-b from-zinc-900 to-black">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl font-bold text-white sm:text-4xl xl:text-5xl">
          Recent Projects I Worked On
        </h2>
      </div>

      {/* Vertical project list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div key={project.name} className="w-full relative group">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 h-full transform transition-all mx-auto flex flex-col">
              {/* Image Section */}
              <div className="flex-shrink-0 mb-3">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-40 sm:h-48 object-cover rounded-md border-2 border-gray-200"
                />
              </div>

              {/* Title Section */}
              <div className="flex flex-col items-center mb-4 flex-grow">
                <div className="h-0.5 bg-gradient-to-r from-green-500 to-yellow-500 w-1/3 mb-2" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 text-center line-clamp-1">
                  {project.name}
                </h3>
              </div>

              {/* Buttons Section */}
              <div className="flex flex-col gap-2 mt-auto">
                <a
                  href={project.github}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 text-sm bg-gradient-to-r from-green-500 to-yellow-500 text-white rounded-lg hover:opacity-90"
                >
                  <Github className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">GitHub</span>
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 text-sm border-2 border-green-500 text-green-500 rounded-lg hover:bg-green-50"
                >
                  <Info className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">Details</span>
                </button>
              </div>
            </div>
            <Meteors number={3} className="hidden sm:block" />
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-3xl w-full p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}>
            <div className="absolute top-4 right-4">
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl bg-gray-100 p-1 rounded-full"
              >
                &times;
              </button>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-yellow-500">
                {selectedProject.name}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Description</h4>
                  <p className="text-gray-600">{selectedProject.description}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-gray-100 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Screenshots</h4>
                <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
                  {selectedProject.screenshots.map((screenshot, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedScreenshot(screenshot)}
                      className="flex-shrink-0 relative group"
                    >
                      <img
                        src={screenshot}
                        alt={`${selectedProject.name} screenshot ${index + 1}`}
                        className="w-64 h-48 object-cover rounded-lg border-2 border-gray-200 hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                        <span className="text-white font-medium">Click to enlarge</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {selectedProject.tools.map((tool) => (
                    <li key={tool} className="hover:text-gray-800">{tool}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Screenshot Lightbox Modal */}
      {selectedScreenshot && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[60] p-4"
          onClick={() => setSelectedScreenshot(null)}>
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={() => setSelectedScreenshot(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedScreenshot}
              alt="Enlarged screenshot"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};