import { server } from '../config/index';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Product from '../components/Product';

export default function Products({ products }) {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden font-poppins'>
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

export const getStaticProps = async () => {
  const products = await fetch(`${server}/api/products`).then((res) =>
    res.json()
  );

  return {
    props: {
      products,
    },
  };
};
