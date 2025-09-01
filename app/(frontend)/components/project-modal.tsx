import React from "react";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

interface Project {
  title?: string;
  id: number;
  description?: string;
  techStack?: string[];
  image?: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNext,
  onPrev,
}) => {
  return (
    <div className="fixed inset-0 bg-gray-800/90 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-lg max-w-4xl w-11/12 max-h-[90vh] overflow-y-auto p-8 h-10/12">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-2xl font-bold text-primary-50">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="hover:text-primary-400 text-primary-50 rounded-full p-2 bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="space-y-4 md:w-1/2">
            <p className="text-gray-300">{project.description}</p>
            <div>
              <h3 className="font-semibold mb-2 text-primary-50">
                {" "}
                Tech Stack:
              </h3>
              <ul className="list-disc list-inside">
                {project.techStack?.map((tech, index) => (
                  <li key={index} className="text-gray-300">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative h-64 w-full md:w-1/2 ">
            <Image
              src={project.image || "placeholder.png"}
              alt={project.title || "Project image"}
              fill
              className="object-contain object-center" // ← keep full image
              sizes="(min-width: 768px) 50vw, 100vw"
              priority={false}
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-11/12 max-w-4xl">
            <button
              onClick={onPrev}
              className="bg-gray-600/50 rounded-full p-2 hover:bg-gray-800/70 transition-colors -translate-x-[60%]"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={onNext}
              className="bg-gray-600/50 rounded-full p-2 hover:bg-gray-800/70 transition-colors -translate-x-[100%]"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
