import { useEffect } from 'react';
import AOS from 'aos';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  return <Component {...pageProps} />;
}

export default MyApp;
