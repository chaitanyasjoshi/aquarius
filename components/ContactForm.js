import { useState } from 'react';
import Link from 'next/link';
import { server } from '../config/index';

import Input from './Input';

export default function ContactForm() {
  const [form, updateForm] = useState({
    name: '',
    email: '',
    contactno: '',
    company: '',
    city: '',
    country: 'India',
    message: '',
  });
  const [isValid, setValidity] = useState(false);

  const handleChange = (event) => {
    updateForm({ ...form, [event.target.id]: event.target.value });
  };

  const handleSubmit = async () => {
    for (let key in form) {
      if (form[key] === '') setValidity(false);
      break;
    }
    if (isValid) {
      let response = await fetch(`${server}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(form),
      }).then((res) => res.json());
      alert(response.status);
    }
  };

  return (
    <section className='relative'>
      {/* Section background (needs .relative className on parent and next sibling elements) */}
      <div
        className='absolute inset-0 bottom-1/2 lg:bottom-0 lg:right-1/2 bg-yellow-50 pointer-events-none'
        aria-hidden='true'
      ></div>

      {/* Section content */}
      <div className='relative flex flex-col lg:flex-row max-w-7xl m-auto'>
        <div className='lg:w-1/2 px-6 sm:px-8 py-24' data-aos='fade-right'>
          <h5 className='py-2 text-4xl font-bold text-gray-900'>
            Get in touch
          </h5>
          <p className='py-1 text-lg font-medium text-gray-500'>
            We'd love to hear from you! Send us a message using the form, or
            email us.
          </p>
          <p className='pt-6 pb-2 text-base font-medium text-gray-500 max-w-xs'>
            Aquarius House, Sheelavihar Colony, Off Karve Road, Erandwane, Pune
            - 411038, Maharashtra, India
          </p>
          <div className='pt-1 flex items-center text-gray-500'>
            <img src='/icons/phone.svg' className='h-6 w-6' alt='phone' />
            <p className='pl-4 text-base font-medium'>+91 8037400779</p>
          </div>
          <div className='pt-1 flex items-center text-gray-500'>
            <img src='/icons/email.svg' className='h-6 w-6' alt='email' />
            <p className='pl-4 text-base font-medium'>
              enquiries@aquariusengineers.biz
            </p>
          </div>
          <p className='py-2 text-base font-medium text-gray-500'>
            Looking for careers?{' '}
            <Link href='/careers'>
              <a className='underline text-yellow-400'>View all job openings</a>
            </Link>
          </p>
        </div>
        <div
          className='w-full lg:w-1/2 px-6 sm:px-8 py-24 bg-gray-50'
          data-aos='fade-left'
        >
          <div className='grid grid-cols-2 gap-3'>
            <div className='col-span-2 lg:col-span-1'>
              <Input
                type='text'
                id='name'
                placeholder='Name'
                handleChange={handleChange}
                validity={setValidity}
              />
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <Input
                type='email'
                id='email'
                placeholder='E-mail'
                handleChange={handleChange}
                validity={setValidity}
              />
            </div>

            <div className='col-span-2 lg:col-span-1'>
              <Input
                type='tel'
                id='contactno'
                placeholder='Contact No'
                handleChange={handleChange}
                validity={setValidity}
              />
            </div>

            <div className='col-span-2 lg:col-span-1'>
              <Input
                type='text'
                id='company'
                placeholder='Company Name'
                handleChange={handleChange}
                validity={setValidity}
              />
            </div>

            <div className='col-span-2 lg:col-span-1'>
              <Input
                type='text'
                id='city'
                placeholder='City'
                handleChange={handleChange}
                validity={setValidity}
              />
            </div>

            <div className='col-span-2 lg:col-span-1'>
              <select
                id='country'
                name='country'
                autoComplete='country'
                onChange={handleChange}
                className='block w-full h-12 py-2 px-3 border border-gray-300 bg-white rounded shadow-sm focus:outline-none focus:ring-yellow-400 focus:border-yellow-400'
              >
                <option>India</option>
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

            <div className='col-span-2'>
              <textarea
                id='message'
                name='message'
                rows='4'
                placeholder='Describe your requirement'
                onChange={handleChange}
                className='shadow-sm focus:ring-yellow-400 focus:border-yellow-400 block w-full border-gray-300 resize-none rounded'
              ></textarea>
            </div>
          </div>

          <div className='py-3'>
            <button
              type='submit'
              onClick={handleSubmit}
              className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm font-medium rounded text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400'
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
