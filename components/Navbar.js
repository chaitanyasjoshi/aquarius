import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <nav
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && 'bg-white blur shadow-lg'
      }`}
    >
      <div className='max-w-7xl mx-auto px-2 md:px-6 lg:px-8'>
        <div
          className={`relative flex items-center justify-between h-16 md:h-20 ${
            expanded && 'bg-white'
          }`}
        >
          <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
            {/* <!-- Mobile menu button--> */}
            <button
              className='border-none cursor-pointer flex p-0 focus:outline-none'
              onClick={() => setExpanded(!expanded)}
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='h-10 w-10'
                viewBox='0 0 100 100'
                fill='none'
                stroke='currentColor'
              >
                <path
                  className='duration-500'
                  style={{
                    transitionProperty: 'stroke-dasharray, stroke-dashoffset',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  strokeWidth='6'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeDasharray={`${expanded ? '90 207' : '60 207'}`}
                  strokeDashoffset={`${expanded ? '-134' : ''}`}
                  d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
                />
                <path
                  className='duration-500'
                  style={{
                    transitionProperty: 'stroke-dasharray, stroke-dashoffset',
                  }}
                  strokeWidth='6'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeDasharray={`${expanded ? '1 60' : '60 60'}`}
                  strokeDashoffset={`${expanded ? '-30' : ''}`}
                  d='M 20,50 H 80'
                />
                <path
                  className='duration-500'
                  style={{
                    transitionProperty: 'stroke-dasharray, stroke-dashoffset',
                  }}
                  strokeWidth='6'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeDasharray={`${expanded ? '90 207' : '60 207'}`}
                  strokeDashoffset={`${expanded ? '-134' : ''}`}
                  d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
                />
              </svg>
            </button>
          </div>
          <div className='flex-1 flex items-center justify-center md:justify-between'>
            <Link href='/'>
              <a className='flex-shrink-0 flex items-center'>
                <img
                  className='block lg:hidden h-8 w-auto'
                  src='/images/logo.png'
                  alt='Aquarius'
                />
                <img
                  className='hidden lg:block h-12 w-auto'
                  src='/images/logo.png'
                  alt='Aquarius'
                />
                <img
                  className='h-5 md:h-6 w-auto'
                  src='/images/brand.png'
                  alt=''
                />
              </a>
            </Link>

            <div className='hidden md:block md:ml-6'>
              <div className='flex space-x-4 items-center'>
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link href='/products'>
                  <a className='text-gray-900 border-b-4 border-transparent hover:border-yellow-400 hover:text-gray-700 px-3 py-2 transition duration-300 ease-in-out'>
                    Products
                  </a>
                </Link>

                <Link href='/news'>
                  <a className='text-gray-900 border-b-4 border-transparent hover:border-yellow-400 hover:text-gray-700 px-3 py-2 transition duration-300 ease-in-out'>
                    News
                  </a>
                </Link>

                <Link href='/about'>
                  <a className='text-gray-900 border-b-4 border-transparent hover:border-yellow-400 hover:text-gray-700 px-3 py-2 transition duration-300 ease-in-out'>
                    About us
                  </a>
                </Link>

                <Link href='/contact'>
                  <a className='text-gray-900 border-b-4 border-transparent hover:border-yellow-400 hover:text-gray-700 px-3 py-2 transition duration-300 ease-in-out'>
                    Contact us
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div
        className={`${
          expanded
            ? 'h-full transform translate-x-0'
            : 'h-0 transform -translate-x-full'
        } md:hidden bg-white text-lg duration-500`}
        style={{
          transitionProperty: 'transform, height',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        id='mobile-menu'
      >
        <div className='px-2 py-4 space-y-1 text-center'>
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <Link href='/products'>
            <a className='text-gray-900 hover:text-gray-500 block px-3 py-3 font-medium'>
              Products
            </a>
          </Link>

          <Link href='/news'>
            <a className='text-gray-900 hover:text-gray-500 block px-3 py-3 font-medium'>
              News
            </a>
          </Link>

          <Link href='/about'>
            <a className='text-gray-900 hover:text-gray-500 block px-3 py-3 font-medium'>
              About us
            </a>
          </Link>

          <Link href='/contact'>
            <a className='text-gray-900 hover:text-gray-500 block px-3 py-3 font-medium'>
              Contact us
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
