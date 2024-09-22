import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

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
    name: 'The Complete Python Developer',
    issuer: 'Udemy',
    date: 'June 2020',
    credentialID: 'UC-24839e68-2daa-4bca-8326-c73f79f37854',
    url: 'http://ude.my/UC-24839e68-2daa-4bca-8326-c73f79f37854',
    logo: 'https://res.cloudinary.com/harsh710/image/upload/f_auto,q_auto/v1/portfolio/rt8wkcdqolu4gtau17xi',
  },
  {
    name: 'Complete Ethical Hacking Bootcamp',
    issuer: 'Udemy',
    date: 'December 2020',
    credentialID: 'UC-3e350b78-e991-4f9f-9a0a-583097e57b78',
    url: 'http://ude.my/UC-3e350b78-e991-4f9f-9a0a-583097e57b78',
    logo: 'https://res.cloudinary.com/harsh710/image/upload/f_auto,q_auto/v1/portfolio/c5rnjzukjsh47f545fgk',
  },
  {
    name: 'JavaScript Web Projects: 20 Projects to Build Your Portfolio',
    issuer: 'Udemy',
    date: 'December 2020',
    credentialID: 'UC-3e350b78-e991-4f9f-9a0a-583097e57b78',
    url: 'http://ude.my/UC-32b1e64d-4efb-47cf-adff-10d4d247dd67',
    logo: 'https://res.cloudinary.com/harsh710/image/upload/f_auto,q_auto/v1/portfolio/q2ww6yrqkg10f0zosjuc',
  },
  {
    name: 'NodeJS Developer Certification',
    issuer: 'Udemy',
    date: 'November 2023',
    credentialID: 'UC-8ac17784-e210-4641-87ce-e20a7fa8c19c',
    url: 'http://ude.my/UC-8ac17784-e210-4641-87ce-e20a7fa8c19c',
    logo: 'https://res.cloudinary.com/harsh710/image/upload/f_auto,q_auto/v1/portfolio/ywfq7xxonpjb9tusaevu',
  },
  {
    name: 'Advanced Javascript',
    issuer: 'Udemy',
    date: 'June 2021',
    credentialID: 'UC-8ed9dcc0-0b16-4bce-9e61-2cc9ea28a630',
    url: ' http://ude.my/UC-8ed9dcc0-0b16-4bce-9e61-2cc9ea28a630',
    logo: 'https://res.cloudinary.com/harsh710/image/upload/f_auto,q_auto/v1/portfolio/dkipmx2qth8xmkgescqg',
  },
  {
    name: 'Google Data Analytics',
    issuer: 'Coursera',
    date: 'July 2021',
    credentialID: '9ae7788e50dfdac3e1ee5117a5638402',
    url: ' https://coursera.org/share/9ae7788e50dfdac3e1ee5117a5638402',
    logo: 'https://res.cloudinary.com/harsh710/image/upload/f_auto,q_auto/v1/portfolio/yyfd2goumkgs30k6mow9',
  },
  {
    name: 'AWS Cloud Technicals',
    issuer: 'Coursera',
    date: 'August 2024',
    credentialID: '8c85596759c3f74a2a1ff481c7dbc9e6',
    url: ' https://coursera.org/share/8c85596759c3f74a2a1ff481c7dbc9e6',
    logo: 'https://res.cloudinary.com/harsh710/image/upload/f_auto,q_auto/v1/portfolio/s7dcvdwdgqiqqttjkwnf',
  },
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
                  <p className='text-sm text-gray-500 dark:text-gray-400 mb-2 overflow-x-hidden'>
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
              <div className='w-72 bg-white rounded dark:bg-gray-800 flex items-center justify-center shadow-lg overflow-hidden'>
                <img
                  className='object-cover'
                  src={cert.logo}
                  alt={cert.issuer}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
