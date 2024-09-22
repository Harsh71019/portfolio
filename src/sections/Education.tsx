import React, { useState } from 'react';

interface EducationCardProps {
  degree: string;
  institution: string;
  year: string;
  details: string[];
}

const EducationCard: React.FC<EducationCardProps> = ({
  degree,
  institution,
  year,
  details,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <section id='education'>
      <div
        className='bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer'
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className='flex justify-between items-center'>
          <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
            {degree}
          </h3>
          <span className='text-sm font-semibold text-blue-500 dark:text-blue-400'>
            {year}
          </span>
        </div>
        <p className='text-gray-600 dark:text-gray-300 mt-2'>{institution}</p>
        {isExpanded && (
          <div className='mt-4 text-gray-700 dark:text-gray-400'>
            <ul className='list-disc list-inside'>
              {details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        )}
        <div className='mt-4 text-blue-500 dark:text-blue-400'>
          {isExpanded ? 'Click to collapse' : 'Click to expand'}
        </div>
      </div>
    </section>
  );
};

const Education: React.FC = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
      <h2 className='mb-10 text-4xl sm:text-4xl font-bold text-gray-900 dark:text-white'>
        Education 🎓
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <EducationCard
          degree='Master of Technology'
          institution='Sardar Patel Institute of Technology'
          year='2018-2020'
          details={[
            'Specialized in Data Science',
            'Took up electives in Cyber Security and Digital Forensics',
            'Completed coursework in Network Security',
          ]}
        />
        <EducationCard
          degree='Bachelor of Engineering'
          institution='M.H.Saboo Siddik College of Engineering'
          year='2014-2018'
          details={[
            'Worked on projects involving analog electronics',
            'Took up electives in Robotics',
            'Studied Digital Communication',
          ]}
        />
      </div>
    </div>
  );
};

export default Education;
