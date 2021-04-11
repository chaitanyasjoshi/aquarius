export default function Socials() {
  return (
    <section className='m-auto px-4 py-16 bg-yellow-50 text-center'>
      {/* <p className='pb-16 text-3xl md:text-4xl font-semibold'>
        Trusted by over <span className='text-yellow-400'>200 companies</span>{' '}
        all over the world
      </p> */}
      <div className='flex flex-row flex-wrap items-center justify-evenly max-w-6xl m-auto'>
        <img className='w-28 m-6' src='/images/logos/acc.png' alt='acc' />

        <img className='w-28 m-6' src='/images/logos/godrej.png' alt='godrej' />

        <img className='w-36 m-6' src='/images/logos/tarmac.png' alt='tarmac' />

        <img className='w-14 m-6' src='/images/logos/lnt.png' alt='l&t' />

        <img
          className='w-28 m-6'
          src='/images/logos/birla.png'
          alt='adityabirla'
        />

        <img
          className='w-28 m-6'
          src='/images/logos/ashoka.png'
          alt='ashokabuildcon'
        />
      </div>
    </section>
  );
}
