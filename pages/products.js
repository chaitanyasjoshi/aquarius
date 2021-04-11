import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Product from '../components/Product';
import Meta from '../components/Meta';

import { products } from '../data/productsData';

export default function Products() {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden font-poppins'>
      <Meta
        title='Our Products'
        keywords='stationary concrete pumps, mobile line pumps, concrete boom pumps, stationary boom placer, stationary batching plants, mobile batching plants, concrete recycling plant, centrifuge sludge separator'
      />
      {/*  Site navbar */}
      <Navbar />

      {/*  Page content */}
      <main className='flex-grow bg-gray-50'>
        {/*  Page sections */}
        <section className='py-10 lg:py-20 px-3 lg:px-8 max-w-7xl m-auto'>
          {products.map((product, i) => (
            <Product key={i} {...product} />
          ))}
        </section>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}
