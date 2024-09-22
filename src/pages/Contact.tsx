import React, { useState, FormEvent } from 'react';
import Layout from '../layout/Layout';
import Navbar from '../components/Navbar';

interface FormData {
  name: string;
  email: string;
  number: string;
  comments: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    number: '',
    comments: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    const tempErrors: Partial<FormData> = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.comments.trim())
      tempErrors.comments = 'Comments are required';

    // Optional email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }

    // Optional phone number validation (basic)
    if (formData.number && !/^\d{10}$/.test(formData.number)) {
      tempErrors.number = 'Phone number should be 10 digits';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // Here you would typically send the form data to a server
      alert('Form submitted successfully!');
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <Layout>
      <Navbar />
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center'>
          Contact Me 📬
        </h2>
        <form onSubmit={handleSubmit} className='max-w-lg mx-auto'>
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2'
            >
              Name *
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-white dark:border-gray-600'
              required
            />
            {errors.name && (
              <p className='text-red-500 text-xs italic'>{errors.name}</p>
            )}
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2'
            >
              Email (optional)
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-white dark:border-gray-600'
            />
            {errors.email && (
              <p className='text-red-500 text-xs italic'>{errors.email}</p>
            )}
          </div>
          <div className='mb-4'>
            <label
              htmlFor='number'
              className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2'
            >
              Phone Number (optional)
            </label>
            <input
              type='tel'
              id='number'
              name='number'
              value={formData.number}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-white dark:border-gray-600'
            />
            {errors.number && (
              <p className='text-red-500 text-xs italic'>{errors.number}</p>
            )}
          </div>
          <div className='mb-6'>
            <label
              htmlFor='comments'
              className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2'
            >
              Comments *
            </label>
            <textarea
              id='comments'
              name='comments'
              value={formData.comments}
              onChange={handleChange}
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:text-white dark:border-gray-600'
              rows={4}
              required
            ></textarea>
            {errors.comments && (
              <p className='text-red-500 text-xs italic'>{errors.comments}</p>
            )}
          </div>
          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-blue-600 dark:hover:bg-blue-800'
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
