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
    title: 'Ford Extended Warranty Portal',
    description: 'A full stack website in NextJS for Ford India',
    image:
      'https://res.cloudinary.com/harsh710/image/upload/f_auto,q_auto/v1/portfolio/websitess/uuzjhuqbi7glq07initf',
    technologies: ['React', 'Node.js', 'NextJS', 'MongoDB'],
    githubLink: 'https://github.com/Harsh71019/fordindia',
    liveLink: 'https://fordindia.vercel.app/',
  },
  {
    title: 'Simple Quiz App in VueJS',
    description: 'A simple quiz app in VueJS',
    image:
      'https://res.cloudinary.com/harsh710/image/upload/f_auto,q_auto/v1/portfolio/websitess/qtch3yjnsujddwrwd0li',
    technologies: ['Vue.js', 'Firebase', 'Vuex'],
    githubLink: 'https://github.com/Harsh71019',
    liveLink: 'https://quizvue-six.vercel.app/',
  },
  {
    title: 'Crosstower Crypto Website',
    description:
      'A responsive crypto website for a client called as Crosstower',
    image:
      'https://res.cloudinary.com/harsh710/image/upload/f_auto,q_auto/v1/portfolio/websitess/uiytrygdm54lvfwmirfp',
    technologies: ['React', 'Node', 'AWS'],
    githubLink: 'https://github.com/Harsh71019',
    liveLink: 'https://crossui.vercel.app/',
  },
  {
    title: 'Mahindra Ecommerce Website Revamp',
    description: 'Mahindra website revamping during my work tenure at Mahindra',
    image:
      'https://res.cloudinary.com/harsh710/image/upload/f_auto,q_auto/v1/portfolio/websitess/ew2yucxlilaavzfutdnf',
    technologies: ['NextJS', 'Magento'],
    githubLink: 'https://github.com/Harsh71019',
    liveLink:
      'https://vercel.com/harsh71019s-projects/m2all/DdXaWNzuadyD5GehQmaNZCjp4Vm3',
  },
  {
    title: 'Clip It twitch Clone',
    description: 'A twitch clone using Firebase and Vue3 and Tailwind CSS',
    image:
      'https://res.cloudinary.com/harsh710/image/upload/f_auto,q_auto/v1/portfolio/websitess/k6maip1adokfgimgxpub',
    technologies: ['Vue.js', 'Firebase', 'Vuex'],
    githubLink: 'https://github.com/Harsh71019',
    liveLink: 'https://clips-3fvi8imue-harsh71019.vercel.app/',
  },
  {
    title: 'Accobuddy',
    description: 'Student acommodation website (Ongoing)',
    image:
      'https://res.cloudinary.com/harsh710/image/upload/f_auto,q_auto/v1/portfolio/websitess/oar9xdupgu7xr6emxaky',
    technologies: ['Vue.js', 'Firebase', 'Vuex'],
    githubLink: 'https://github.com/Harsh71019',
    liveLink: 'https://www.accobuddy.com/',
  },
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
