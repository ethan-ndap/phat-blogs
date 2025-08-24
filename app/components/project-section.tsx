'use client'
import React from "react";
import ProjectModal from "./project-modal";
import {useState} from "react";

interface Project {
  id: number;
  title: string;
  tags?: string[];
}

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "WILDFIRE - Management Platform",
      tags: [
        "Project Management",
        "UI/UX",
        "Figma",
        "Fullstack"
      ],
      description: "Led the capstone project WILDFIRE, a Work Integrated Learning (WIL) platform developed in collaboration with Sample Assist, a medical technology company. The platform was designed to streamline and efficiently manage internship programs for universities and partner organizations.",
      techStack: ["RESTful", "Node.js", "Express", "Ant Design", "TypeScript"],
      image: "/project-images/project-wildfire.png"
    },
    {
      id: 2,
      title: "Elderly AI Monitoring System  ",
      tags: ['Acadamic Research', 'Python', 'LSTM', 'Flask'],
            description: " Throughout the 10-week research period, I implemented real-time object detection using the YOLO model to monitor human activity and convert video streams into timestamped data, ensuring both privacy protection and system efficiency. This data was then processed by a Long Short-Term Memory (LSTM) neural network trained to detect anomalies in behavioral patterns over time. In addition, I designed and developed an escalating alert system using Flask to manage notifications and integrated the Twilio API to send automated SMS alerts and initiate emergency calls when unusual behavior was detected.",
      techStack: ['Acadamic Research', 'Python', 'LSTM', 'Flask'],
      image: "/project-images/Monitoring-workflow.png"
    },
    {
      id: 3,
      title: "Project 3",
      tags: ["tags 3"],
      description:"",
      techStack: ['React', 'TypeScript', 'Figma'],
      image: "/project-images/p-3.jpg"
    },
    {
      id: 4,  
      title: "Project 4",
      tags: ["tags 4", "tag 2"],
      description:"",
      techStack: ['React', 'TypeScript', 'Figma'],
      image: "/project-images/p-1.jpg"
    },
    {
      id: 5,
      title: "Project 5",
      tags: ["tags 5"],
      description:"",
      techStack: ['React', 'TypeScript', 'Figma'],
      image: "/project-images/AI-detection.png"
    },
    {
      id: 6,  
      title: "Project 6",
      tags: ["tags 6"],
      description:"",
      techStack: ['React', 'TypeScript', 'Figma'],
      image: "/project-images/p-2.jpg"
    },
  ];

  const [selectedProjectID, setSelectedProjectID] = useState<Project["id"] | null>(null);
  const handleProjectClick = (project: Project) => {
    // Handle project click (e.g., open modal)
    setSelectedProjectID(project.id);
  };

  const handleProjectClose = () => {
    // Handle project close (e.g., close modal)
    setSelectedProjectID(null);
  };

  const handleNextProject = () => {
    // Check if NO project selected
    if (selectedProjectID === null) {
      return null;
    } 
    else {
      // Get next index
      const currentIndex = projects.findIndex(project => project.id === selectedProjectID);
      const nextIndex = (currentIndex + 1) % projects.length;
      const nextProjectID = projects[nextIndex].id;
      // Set selected project by id
      setSelectedProjectID(nextProjectID);
    }
  };

  const handlePrevProject = () => {
    // Check if NO project selected
    if (selectedProjectID === null) {
      return null;
    } 
    else {
      // Get prev index
      const currentIndex = projects.findIndex(project => project.id === selectedProjectID);
      const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
      const prevProjectID = projects[prevIndex].id;
      // Set selected project by id
      setSelectedProjectID(prevProjectID);
    }
  };

  return (
    <section id="projects" className="px-4 py-32 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-12 text-center">Feature Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <button
            key={index}
            className=" backdrop-blur-sm rounded-lg p-6 border border-primary-800/50 hover:border-primary-500/50 transition-colors hover:shadow-sm text-left"
            onClick={() => handleProjectClick(project)}
          >
            <div className="flex flex-col h-full">
              <h3 className=" text-foreground  text-lg font-semibold mb-2">
                {project.title}
              </h3>
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 text-xs rounded-full bg-primary-500/20 text-primary-500 border border-primary-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </button>
        ))}
      </div>
      {selectedProjectID && (
        (() => {
          const selectedProject = projects.find(project => project.id === selectedProjectID);
          if (!selectedProject) return null;
          return (
            <ProjectModal
              project={selectedProject}
              onClose={handleProjectClose}
              onNext={handleNextProject}
              onPrev={handlePrevProject}
            >
            </ProjectModal>
          );
        })()
      )}
    </section>
  );
};

export default ProjectSection;
