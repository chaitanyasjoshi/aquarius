import { server } from '../config/index';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Event from '../components/Event';
import Meta from '../components/Meta';

export default function News({ news }) {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden font-poppins'>
      <Meta
        title='News'
        keywords='guinness book of world records, barge mounted batching plant, concrete show, constro, kanyakumari road project, pune running, elematic oy, bc india, manohar parrikar, defence minister of india, ce, soncap, batching plant at highest altitude'
      />
      {/*  Site navbar */}
      <Navbar />

      {/*  Page content */}
      <main className='flex-grow bg-gray-50'>
        {/*  Page sections */}
        <section className='py-10 lg:py-20 px-3 lg:px-8 max-w-7xl m-auto'>
          <div className='mt-10' data-aos='zoom-y-out'>
            <h3 className='text-3xl lg:text-4xl text-gray-800 text-center font-bold'>
              News & Events
            </h3>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
              {news.map((item, i) => (
                <Event key={i} {...item} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const news = await fetch(`${server}/api/news`).then((res) => res.json());

  return {
    props: {
      news,
    },
  };
};
