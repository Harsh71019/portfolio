import Slider from 'react-slick';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Company {
  name: string;
  logo: string;
}

const companies: Company[] = [
  {
    name: 'Capgemini',
    logo: 'https://res.cloudinary.com/harsh710/image/upload/f_auto,q_auto/v1/portfolio/Company%20Logos/clianjwgpv0idmp1sgmu',
  },
  {
    name: 'Mahindra and Mahindra',
    logo: 'https://res.cloudinary.com/harsh710/image/upload/f_auto,q_auto/v1/portfolio/Company%20Logos/pwsvebfxprh2e0exbcw8',
  },
  {
    name: 'Mekari',
    logo: 'https://res.cloudinary.com/harsh710/image/upload/f_auto,q_auto/v1/portfolio/Company%20Logos/tzthdaqtsrku3rhtsum5',
  },
  {
    name: 'Codezen Tech Solutions',
    logo: 'https://res.cloudinary.com/harsh710/image/upload/f_auto,q_auto/v1/portfolio/Company%20Logos/hxdbqh5kinnea1w2bngm',
  },
];

const CompanyCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className='bg-gray-100 dark:bg-black-800 py-16'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center text-gray-900 dark:text-white mb-8'>
          Companies I've Worked With
        </h2>
        <Slider {...settings}>
          {companies.map((company, index) => (
            <div key={index} className='px-2'>
              <div className='bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex items-center justify-center h-40'>
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className='max-h-full max-w-full object-contain'
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CompanyCarousel;
