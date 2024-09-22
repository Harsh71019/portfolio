import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error('ExampleComponent must be used within a ThemeProvider');
  }

  const { toggleDarkMode } = themeContext;

  return (
    <>
      <nav className='bg-white dark:bg-black w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
        <div className='container flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link
            to={'/'}
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img
              src='https://flowbite.com/docs/images/logo.svg'
              className='h-8'
              alt='Harsh Patel'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              HP
            </span>
          </Link>
          <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
            <label className='inline-flex items-center cursor-pointer mr-4'>
              <input
                onClick={toggleDarkMode}
                type='checkbox'
                value=''
                className='sr-only peer'
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>

            <Link
              to={'/contacts'}
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Contact Me!
            </Link>
            <button
              data-collapse-toggle='navbar-sticky'
              type='button'
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-sticky'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
          </div>
          <div
            className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
            id='navbar-sticky'
          >
            <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-gray-700'>
              <li>
                <Link
                  to='/#home'
                  className='block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/#experience'
                  className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to='/#education'
                  className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to='/#tech-stack'
                  className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                >
                  Tech-Stack
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
