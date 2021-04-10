export default function Socials() {
  return (
    <section className='m-auto px-4 py-16 bg-yellow-50 text-center'>
      {/* <p className='pb-16 text-3xl md:text-4xl font-semibold'>
        Trusted by over <span className='text-yellow-400'>200 companies</span>{' '}
        all over the world
      </p> */}
      <div className='grid grid-cols-6 max-w-7xl m-auto' data-aos='zoom-y-out'>
        <div className='col-span-3 lg:col-span-1 m-auto p-4'>
          <img
            className='h-10'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/ACC_Limited_logo.svg/250px-ACC_Limited_logo.svg.png'
            alt='acc'
          />
        </div>

        <div className='col-span-3 lg:col-span-1 m-auto p-4'>
          <img
            className='h-14'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Godrej_Logo.svg/250px-Godrej_Logo.svg.png'
            alt='godrej'
          />
        </div>

        <div className='col-span-3 lg:col-span-1 m-auto p-4'>
          <img
            className='h-12'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Tarmac_logo.svg/250px-Tarmac_logo.svg.png'
            alt='tarmac'
          />
        </div>

        <div className='col-span-3 lg:col-span-1 m-auto p-4'>
          <img
            className='h-16'
            src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Larsen%26Toubro_logo.svg/220px-Larsen%26Toubro_logo.svg.png'
            alt='l&t'
          />
        </div>

        <div className='col-span-3 lg:col-span-1 m-auto p-4'>
          <img
            className='h-20'
            src='https://www.adityabirla.com/Assets/images/our-download-logo.png'
            alt='adityabirla'
          />
        </div>

        <div className='col-span-3 lg:col-span-1 m-auto p-4'>
          <img
            className='h-12'
            src='https://img.melodylinhart.com/900-_-358-_-85-_-ashokabuildcon.com/wp-content/uploads/2017/12/Ashoka-Buildcon-Logo-PNG-transparent-back-ground-1.png'
            alt='ashokabuildcon'
          />
        </div>
      </div>
    </section>
  );
}
