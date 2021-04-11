import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Meta from '../components/Meta';

export default function About() {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden font-poppins'>
      <Meta
        title='About Us'
        keywords='construction, robust, concrete batching, conveying applications, vision, mission, mr. m. s. bhadbhade, mr. a. v. dikshit'
      />
      {/*  Site navbar */}
      <Navbar />

      {/*  Page content */}
      <main className='flex-grow bg-gray-50'>
        {/*  Page sections */}
        <section className='relative mt-10 py-10 sm:py-20 px-4 sm:px-6 md:px-8 max-w-7xl m-auto overflow-hidden'>
          <div
            className='absolute max-w-7xl w-full -left-80 -top-72 pointer-events-none hidden lg:block'
            aria-hidden='true'
          >
            <svg
              className='w-full scale-150'
              viewBox='0 0 200 200'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill='#FFFBEB'
                d='M55.7,-14.6C60.8,-2.4,45.7,19.9,25.8,34C6,48,-18.7,53.9,-38.3,42.1C-58,30.3,-72.6,1,-65.4,-14.1C-58.2,-29.2,-29.1,-30,-1.9,-29.4C25.3,-28.8,50.6,-26.7,55.7,-14.6Z'
                transform='translate(100 100)'
              />
            </svg>
          </div>

          <div className='relative'>
            <div className='py-10'>
              <h4 className='text-4xl lg:text-5xl text-gray-800 text-center font-bold'>
                We believe in making{' '}
                <span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-300'>
                  construction
                </span>{' '}
                easy
              </h4>
              <p className='py-5 text-center text-lg text-gray-600 font-medium'>
                For over 2 decades, Aquarius Engineers has provided a complete
                range of robust construction equipment for concrete batching and
                conveying applications, suitable for indian conditions.
              </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 py-10'>
              <div className='col-span-1 p-4 pt-6 border-l-8 border-b-8 border-yellow-500 rounded-2xl'>
                <h5 className='text-2xl text-gray-800 font-bold'>Our Vision</h5>
                <p className='py-5 text-gray-600 font-medium'>
                  Our vision is to become the most trusted knowledge and
                  equipment source in the field of concrete production,
                  conveying & placement.
                </p>
              </div>
              <div className='col-span-1 px-4 py-6'>
                <h5 className='text-2xl text-gray-800 font-bold'>
                  Our Mission
                </h5>
                <p className='py-5 text-gray-600 font-medium'>
                  We shall strive to bring the finest technology products and
                  expertise to the industry we serve, with a focus of delivering
                  complete & reliable solutions.
                </p>
              </div>
              <div className='col-span-1 p-4 border-r-8 border-t-8 border-yellow-500 rounded-2xl'>
                <h5 className='text-2xl text-gray-800 font-bold'>Our Values</h5>
                <ul className='py-5 pl-5 text-gray-600 font-medium list-disc'>
                  <li>Integrity & high ethical standards</li>
                  <li>Technology excellence and quality</li>
                  <li>Reliability</li>
                  <li>Committed to customers and community</li>
                  <li>Respectful and open</li>
                </ul>
              </div>
            </div>
            <div className='pt-10 lg:pt-20'>
              <h3 className='text-3xl md:text-4xl font-bold text-gray-800'>
                Meet our leadership
              </h3>
              <div className='py-10 grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='md:h-60 col-span-1'>
                  <div className='flex'>
                    <img
                      className='w-44 rounded-md'
                      src='/images/avatar.png'
                      alt=''
                    />
                    <div className='ml-5'>
                      <p className='text-lg font-medium text-gray-800'>
                        Mr. M. S. Bhadbhade
                      </p>
                      <p className='text-lg text-yellow-500 font-medium'>
                        Managing Director
                      </p>
                      <p className='hidden sm:block mt-5 text-gray-600 font-medium'>
                        "The real achievement of Aquarius Engineers has been the
                        creation of a well-trained and committed work force that
                        can absorb the new technology, understand the local
                        conditions and support the customer satisfactorily."
                      </p>
                    </div>
                  </div>
                  <p className='block sm:hidden mt-5 text-gray-600 font-medium'>
                    "The real achievement of Aquarius Engineers has been the
                    creation of a well-trained and committed work force that can
                    absorb the new technology, understand the local conditions
                    and support the customer satisfactorily."
                  </p>
                </div>
                <div className='md:h-60 col-span-1'>
                  <div className='flex'>
                    <img
                      className='w-44 rounded-md'
                      src='/images/avatar.png'
                      alt=''
                    />
                    <div className='ml-5'>
                      <p className='text-lg font-medium text-gray-800'>
                        Mr. A. V. Dikshit
                      </p>
                      <p className='text-lg text-yellow-500 font-medium'>
                        Technical Director
                      </p>
                      <p className='hidden sm:block mt-5 text-gray-600 font-medium'>
                        "Aquarius is the only Indian company manufacturing
                        Concrete Pumps & Batching Plants indigenously. The
                        technology evolved is suited to Indian conditions and
                        proven over many years."
                      </p>
                    </div>
                  </div>
                  <p className='block sm:hidden mt-5 text-gray-600 font-medium'>
                    "Aquarius is the only Indian company manufacturing Concrete
                    Pumps & Batching Plants indigenously. The technology evolved
                    is suited to Indian conditions and proven over many years."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}
