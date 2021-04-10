export default function ContactUs({ offices, locations }) {
  return (
    <section className='mt-10 px-6 lg:px-8 max-w-7xl m-auto'>
      <div className='py-20 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 border-b-2 border-gray-200'>
        <div className='col-span-1 row-span-2 lg:row-span-6 xl:row-span-4'>
          <h5 className='text-4xl text-gray-800 font-bold'>Our offices</h5>
        </div>
        {offices.map((office, i) => (
          <div
            className='col-span-1 shadow-md rounded-lg p-5 h-60 lg:h-72 bg-white flex flex-col justify-between'
            key={i}
            data-aos='fade-up'
          >
            <div>
              <p className='mb-1 text-lg font-semibold text-gray-800'>
                {office.city}
              </p>
              <p className='mb-2 font-medium text-gray-500'>{office.address}</p>
            </div>
            <div>
              <div className='flex items-center'>
                <img src='/icons/phone.svg' className='h-5 w-5' alt='' />
                <p className='ml-2 font-medium text-gray-500'>
                  {office.contact}
                </p>
              </div>
              <div className='flex items-center'>
                <img
                  src='/icons/map.svg'
                  className='h-5 w-5 text-gray-500'
                  alt=''
                />
                <a
                  href={office.locate}
                  target='_blank'
                  rel='noreferrer'
                  className='ml-2 font-medium text-gray-500'
                >
                  Locate us
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='py-10 lg:pt-20 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        <div className='col-span-1 row-span-2'>
          <h5 className='text-4xl text-gray-800 font-bold'>Locations</h5>
        </div>
        {locations.map((location, i) => (
          <div
            className='col-span-1 shadow-md rounded-lg p-5 h-48 bg-white flex flex-col justify-between'
            key={i}
            data-aos='fade-up'
          >
            <div>
              <p className='mb-1 text-lg font-semibold text-gray-800'>
                {location.name}
              </p>
              <p className='mb-2 font-medium text-gray-500'>
                {location.address}
              </p>
            </div>

            <div className='flex items-center'>
              <img
                src='/icons/map.svg'
                className='h-5 w-5 text-gray-500'
                alt=''
              />
              <a
                href={location.locate}
                target='_blank'
                rel='noreferrer'
                className='ml-2 font-medium text-gray-500'
              >
                Locate us
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
