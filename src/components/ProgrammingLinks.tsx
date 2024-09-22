import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaHackerrank,
  FaStackOverflow,
} from 'react-icons/fa';
import { SiLeetcode, SiCodewars, SiCodeforces } from 'react-icons/si';

interface LinkItem {
  name: string;
  url: string;
  icon: React.ReactElement;
}

const links: LinkItem[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: <FaGithub />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yourusername',
    icon: <FaLinkedin />,
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/yourusername',
    icon: <SiLeetcode />,
  },
  {
    name: 'CodeWars',
    url: 'https://www.codewars.com/users/yourusername',
    icon: <SiCodewars />,
  },
  {
    name: 'CodePen',
    url: 'https://codepen.io/yourusername',
    icon: <FaCodepen />,
  },
  {
    name: 'HackerRank',
    url: 'https://www.hackerrank.com/yourusername',
    icon: <FaHackerrank />,
  },
  {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/users/youruserid',
    icon: <FaStackOverflow />,
  },
  {
    name: 'Codeforces',
    url: 'https://codeforces.com/profile/yourusername',
    icon: <SiCodeforces />,
  },
];

const ProgrammingLinks: React.FC = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <h2 className='text-4xl sm:text-4xl  font-bold text-gray-900 dark:text-white mb-8'>
        Find Me Online 🌐
      </h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105'
          >
            <span className='text-2xl mr-2 text-gray-700 dark:text-gray-300'>
              {link.icon}
            </span>
            <span className='text-gray-900 dark:text-white font-medium'>
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProgrammingLinks;
