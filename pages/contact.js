import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Meta from '../components/Meta';

import { offices } from '../data/officesData';
import { locations } from '../data/locationsData';

export default function Contact() {
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
