import { useState } from 'react';

const Hero = () => {
  const [isCentered, setIsCentered] = useState(false);

  const toggleImageCenter = () => {
    setIsCentered(!isCentered);
  };

  return (
    <>
      <div className='container mt-20 mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          <div className='text-center lg:text-left mb-8 lg:mb-0 max-w-2xl'>
            <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white'>
              Harsh Patel 👨‍💻
            </h1>
            <h2 className='text-xl sm:text-2xl mt-5 text-gray-600 dark:text-gray-300'>
              "I Center Divs on the First Try" 🎯
            </h2>
            <p className='mt-5 text-gray-700 dark:text-gray-300'>
              🚀 Software Engineer | 💡 Frontend Specialist | 🛠️ JavaScript
              Enthusiast
            </p>
            <p className='mt-5 text-gray-700 dark:text-gray-300'>
              Turning ☕ into code since 2018. Crafting exceptional user
              experiences with React and Vue. Let's build something amazing
              together!
            </p>
            <button
              onClick={toggleImageCenter}
              className='mt-5
               bg-blue-500 hover:bg-blue-600
               text-white font-bold py-2 px-4 rounded-full text-sm sm:text-base
              transition duration-300 ease-in-out transform hover:scale-105
               dark:bg-blue-600 dark:hover:bg-blue-700
            '
            >
              {isCentered ? 'Uncenter 🔙' : 'Center Me 🎯'}
            </button>
          </div>
          <div className='relative w-full lg:w-96 h-96'>
            <div
              className={`
              relative w-full h-full
              ${isCentered ? 'flex justify-center items-center' : ''}
            `}
            >
              <div
                onClick={toggleImageCenter}
                className={`
                w-64 h-64 sm:w-72 sm:h-72
                ${
                  isCentered
                    ? 'animate-center'
                    : 'animate-uncenter absolute bottom-0 right-0'
                }
                bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden 
                transition-all duration-500 ease-in-out
                hover:scale-105 hover:shadow-lg dark:hover:shadow-gray-700
                cursor-pointer
              `}
              >
                <img
                  src='../../public/harsh.jpg'
                  alt='Harsh Patel'
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center'>
                  <span className='text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity duration-300'>
                    {isCentered ? 'Uncenter' : 'Center Me'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
