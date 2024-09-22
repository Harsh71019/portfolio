import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { linkedinLink, githubLink } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-100 dark:bg-black'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-4 md:mb-0'>
            <h2 className='text-2xl font-bold text-gray-800 dark:text-white text-center md:text-left'>
              Harsh Patel
            </h2>
            <p className='text-gray-600 dark:text-gray-300 mt-2'>
              Software Engineer & Web Developer
            </p>
          </div>
          <div className='flex space-x-4'>
            <a
              href={githubLink}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white'
            >
              <FaGithub size={24} />
            </a>
            <a
              href={linkedinLink}
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white'
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href='mailto:harsh710patel@gmail.com'
              className='text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white'
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-200 dark:border-gray-700 pt-8'>
          <nav className='flex flex-wrap justify-center mx-5 my-2'>
            <div className='px-5 py-2'>
              <a
                href='#about'
                className='text-base text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white'
              >
                About
              </a>
            </div>
            <div className='px-5 py-2'>
              <a
                href='#projects'
                className='text-base text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white'
              >
                Projects
              </a>
            </div>
            <div className='px-5 py-2'>
              <a
                href='#experience'
                className='text-base text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white'
              >
                Experience
              </a>
            </div>
            <div className='px-5 py-2'>
              <a
                href='#contact'
                className='text-base text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white'
              >
                Contact
              </a>
            </div>
          </nav>
          <p className='mt-8 text-center text-base text-gray-500 dark:text-gray-400'>
            © {currentYear} Harsh Patel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
