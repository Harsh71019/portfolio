import React from 'react';
import {
  FaReact,
  FaVuejs,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedux,
} from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactElement;
  category: 'language' | 'framework' | 'database' | 'tool';
}

const skills: Skill[] = [
  { name: 'JavaScript', icon: <SiJavascript />, category: 'language' },
  { name: 'TypeScript', icon: <SiTypescript />, category: 'language' },
  { name: 'Python', icon: <FaPython />, category: 'language' },
  { name: 'HTML5', icon: <FaHtml5 />, category: 'language' },
  { name: 'CSS3', icon: <FaCss3Alt />, category: 'language' },
  { name: 'React', icon: <FaReact />, category: 'framework' },
  { name: 'Vue.js', icon: <FaVuejs />, category: 'framework' },
  { name: 'Angular', icon: <SiAngular />, category: 'framework' },
  { name: 'Node.js', icon: <FaNodeJs />, category: 'framework' },
  { name: 'NestJS', icon: <SiNestjs />, category: 'framework' },
  { name: 'Express', icon: <SiExpress />, category: 'framework' },
  { name: 'MongoDB', icon: <SiMongodb />, category: 'database' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'database' },
  { name: 'Redux', icon: <SiRedux />, category: 'tool' },
  { name: 'Docker', icon: <FaDocker />, category: 'tool' },
];

const SkillsShowcase: React.FC = () => {
  return (
    <section id='tech-stack' className='mt-20'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <h1 className='mb-10 text-4xl sm:text-4xl font-bold text-gray-900 dark:text-white'>
          Skills & Technologies 🚀
        </h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
          {skills.map((skill) => (
            <div
              key={skill.name}
              className='flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105'
            >
              <span className='text-4xl mb-2 text-blue-500 dark:text-blue-400'>
                {skill.icon}
              </span>
              <span className='text-sm font-medium text-gray-900 dark:text-white text-center'>
                {skill.name}
              </span>
              <span className='text-xs text-gray-500 dark:text-gray-400 mt-1'>
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
