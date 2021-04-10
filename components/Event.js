import React from 'react';

export default function Event(props) {
  return (
    <div className='col-span-1' data-aos='fade-up'>
      <div className='p-5 min-h-full bg-white rounded-lg shadow-md overflow-hidden'>
        <img
          className='h-40 mx-auto'
          src={`/images/news/${props.banner}.jpg`}
        />
        <div className='pt-5'>
          <p className='pt-1 text-yellow-500'>{props.type}</p>
          <p className='pt-1 text-lg text-gray-900 font-semibold'>
            {props.title}
          </p>
          <p className='pt-2 text-gray-700 font-medium'>{props.content}</p>
        </div>
      </div>
    </div>
  );
}
