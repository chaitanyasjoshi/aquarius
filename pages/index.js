import { server } from '../config/index';

import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
import HeroHome from '../components/HeroHome';
import Socials from '../components/Socials';
import FeaturesHome from '../components/FeaturesHome';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Index({ features }) {
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

export const getStaticProps = async () => {
  const features = await fetch(`${server}/api/features`).then((res) =>
    res.json()
  );

  return {
    props: {
      features,
    },
  };
};
