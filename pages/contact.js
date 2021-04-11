import { server } from '../config/index';

import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Meta from '../components/Meta';

export default function Contact({ offices, locations }) {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden font-poppins'>
      <Meta
        title='Contact Us'
        keywords='pune, head office, ahmedabad, hydrabad, bengaluru, indore, chandigarh, kolkata, delhi, mumbai, jodhpur, jaipur, bhubaneshwar, plant, warehouse, locate, contact'
      />
      {/*  Site navbar */}
      <Navbar />

      {/*  Page content */}
      <main className='flex-grow bg-gray-50'>
        {/*  Page sections */}
        <ContactUs offices={offices} locations={locations} />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const offices = await fetch(`${server}/api/offices`).then((res) =>
    res.json()
  );
  const locations = await fetch(`${server}/api/locations`).then((res) =>
    res.json()
  );

  return {
    props: {
      offices,
      locations,
    },
  };
};
