import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
import HeroHome from '../components/HeroHome';
import Socials from '../components/Socials';
import FeaturesHome from '../components/FeaturesHome';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

import { features } from '../data/featuresData';

export default function Index() {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden font-poppins'>
      <Meta />
      {/*  Site navbar */}
      <Navbar />

      {/*  Page content */}
      <main className='flex-grow bg-gray-50'>
        {/*  Page sections */}
        <HeroHome />
        <Socials />
        <FeaturesHome features={features} />
        <ContactForm />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}
