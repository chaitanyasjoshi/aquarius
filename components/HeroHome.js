import Link from 'next/link';

export default function HeroHome() {
  return (
    <section className='relative flex flex-col justify-center h-screen max-w-7xl mx-auto'>
      <img
        className='absolute hidden lg:block h-full right-0 pointer-events-none'
        src='/images/background.png'
        alt=''
      />

      <div className='px-4 md:px-6 lg:px-8 mx-auto lg:mx-0 text-center lg:text-left'>
        <h1 className='text-5xl md:text-6xl text font-extrabold leading-tight tracking-tighter'>
          We help you{' '}
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-300'>
            build
          </span>{' '}
          things!
        </h1>
        <p className='mt-6 text-lg md:text-xl text-gray-600 lg:max-w-xl'>
          Aquarius engineers is a global competitor in manufacturing of concrete
          pumps, batching plants and boom pumps
        </p>
        <Link href='/products'>
          <a className='mt-6 w-max p-2 pl-3 mx-auto lg:mx-0 flex items-center bg-yellow-400 rounded-full focus:outline-none'>
            <span className='font-medium'>Our Products</span>
            <div className='ml-2 p-2 bg-yellow-200 rounded-full'>
              <svg
                className='h-4 w-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
}
