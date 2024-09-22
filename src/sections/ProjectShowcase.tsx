import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce platform with user authentication, product catalog, and payment integration.',
    image: '/path-to-ecommerce-image.jpg',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/yourusername/ecommerce-project',
    liveLink: 'https://your-ecommerce-site.com',
  },
  {
    title: 'Task Management App',
    description:
      'A responsive task management application with real-time updates and team collaboration features.',
    image: '/path-to-taskmanager-image.jpg',
    technologies: ['Vue.js', 'Firebase', 'Vuex'],
    githubLink: 'https://github.com/yourusername/task-manager',
    liveLink: 'https://your-task-app.com',
  },
  {
    title: 'Task Management App',
    description:
      'A responsive task management application with real-time updates and team collaboration features.',
    image: '/path-to-taskmanager-image.jpg',
    technologies: ['Vue.js', 'Firebase', 'Vuex'],
    githubLink: 'https://github.com/yourusername/task-manager',
    liveLink: 'https://your-task-app.com',
  },
  {
    title: 'Task Management App',
    description:
      'A responsive task management application with real-time updates and team collaboration features.',
    image: '/path-to-taskmanager-image.jpg',
    technologies: ['Vue.js', 'Firebase', 'Vuex'],
    githubLink: 'https://github.com/yourusername/task-manager',
    liveLink: 'https://your-task-app.com',
  },
  {
    title: 'Task Management App',
    description:
      'A responsive task management application with real-time updates and team collaboration features.',
    image: '/path-to-taskmanager-image.jpg',
    technologies: ['Vue.js', 'Firebase', 'Vuex'],
    githubLink: 'https://github.com/yourusername/task-manager',
    liveLink: 'https://your-task-app.com',
  },
  {
    title: 'Task Management App',
    description:
      'A responsive task management application with real-time updates and team collaboration features.',
    image: '/path-to-taskmanager-image.jpg',
    technologies: ['Vue.js', 'Firebase', 'Vuex'],
    githubLink: 'https://github.com/yourusername/task-manager',
    liveLink: 'https://your-task-app.com',
  },
  // Add more projects as needed
];

const ProjectShowcase: React.FC = () => {
  return (
    <section id='projects'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center'>
          My Projects 💻
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden'
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-48 object-cover'
              />
              <div className='p-6'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>
                  {project.description}
                </p>
                <div className='flex flex-wrap mb-4'>
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='flex justify-between'>
                  <a
                    href={project.githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center'
                  >
                    <FaGithub className='mr-2' /> GitHub
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300 flex items-center'
                    >
                      <FaExternalLinkAlt className='mr-2' /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
