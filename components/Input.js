import { useState } from 'react';

export default function Input({
  type,
  id,
  placeholder,
  value,
  handleChange,
  validity,
}) {
  const [message, setMessage] = useState('');

  const validate = (event) => {
    event.target.value === ''
      ? setMessage(`${placeholder} is required`)
      : setMessage('');

    if (event.target.id === 'email') {
      validateEmail(event.target.value)
        ? setMessage('')
        : setMessage('Please enter valid email id');
    }

    if (event.target.id === 'contactno') {
      Number(event.target.value)
        ? setMessage('')
        : setMessage('Please enter valid contact no');
    }

    message.length === 0 ? validity(false) : validity(true);
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onBlur={validate}
        onChange={handleChange}
        className='focus:ring-yellow-400 focus:border-yellow-400 block w-full h-12 shadow-sm border-gray-300 rounded'
      />
      <span className='flex items-center font-medium tracking-wide text-red-600 text-xs mt-1 ml-1'>
        {message}
      </span>
    </>
  );
}
