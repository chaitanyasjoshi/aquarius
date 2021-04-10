import Link from 'next/link';

export default function Footer() {
  return (
    <section className='bg-gray-900'>
      <div className='max-w-2xl m-auto p-16 flex flex-col text-gray-50'>
        <div className='flex flex-col md:flex-row items-center md:justify-between pb-12'>
          <Link href='/products'>
            <a className='p-2'>Products</a>
          </Link>
          <Link href='/news'>
            <a className='p-2'>News</a>
          </Link>
          <Link href='/careers'>
            <a className='p-2'>Careers</a>
          </Link>
          <Link href='/about'>
            <a className='p-2'>About us</a>
          </Link>
          <Link href='/contact'>
            <a className='p-2'>Contact us</a>
          </Link>
        </div>
        <div className='text-center'>
          <p>© Aquarius Engineers Pvt. Ltd. 2021</p>
        </div>
      </div>
    </section>
  );
}
