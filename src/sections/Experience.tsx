import Timeline from '../components/Timeline';

const Experience = () => {
  return (
    <section id='experience'>
      <div className='container mx-auto px-4 mt-20sm:px-6 lg:px-8'>
        <h1 className='mb-10 text-4xl sm:text-4xl font-bold text-gray-900 dark:text-white'>
          Experience
        </h1>
        <div>
          <Timeline />
        </div>
      </div>
    </section>
  );
};

export default Experience;
