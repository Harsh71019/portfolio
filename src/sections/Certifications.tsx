import React from 'react';
import { FaExternalLinkAlt, FaMedal } from 'react-icons/fa';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialID?: string;
  url?: string;
  logo: string;
}

const certifications: Certification[] = [
  {
    name: 'React Developer Certification',
    issuer: 'Meta',
    date: 'June 2023',
    credentialID: 'ABC123XYZ',
    url: 'https://www.coursera.org/account/accomplishments/verify/ABC123XYZ',
    logo: '/path-to-meta-logo.png',
  },
  {
    name: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    date: 'August 2023',
    credentialID: 'AWS-DEV-12345',
    url: 'https://www.credly.com/badges/AWS-DEV-12345/public_url',
    logo: '/path-to-aws-logo.png',
  },
  // Add more certifications as needed
];

const Certifications: React.FC = () => {
  return (
    <section
      id='certifications'
      className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'
    >
      <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center'>
        My Certifications 🏆
      </h2>
      <div className='relative'>
        {/* Vertical line */}
        <div className='absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700'></div>

        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`mb-8 flex ${
              index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
            } items-center`}
          >
            <div
              className={`w-1/2 ${
                index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'
              }`}
            >
              <div className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl'>
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className='h-12 mb-4 mx-auto'
                />
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                  {cert.name}
                </h3>
                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                  Issued by: {cert.issuer}
                </p>
                <p className='text-gray-600 dark:text-gray-300 mb-2'>
                  Date: {cert.date}
                </p>
                {cert.credentialID && (
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-2'>
                    Credential ID: {cert.credentialID}
                  </p>
                )}
                {cert.url && (
                  <a
                    href={cert.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300'
                  >
                    View Certificate <FaExternalLinkAlt className='ml-2' />
                  </a>
                )}
              </div>
            </div>
            <div className='w-1/2 flex justify-center'>
              <div className='w-8 h-8 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center'>
                <FaMedal className='text-white' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
