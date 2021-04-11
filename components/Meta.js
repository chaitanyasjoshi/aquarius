import Head from 'next/head';

export default function Meta({ title, keywords, description }) {
  return (
    <Head>
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  title: 'Aquarius Engineers',
  keywords:
    'aquarius, engineers, manufacturing, concrete pumps, batching plants, boom pumps, turnkey projects',
  description:
    'Aquarius engineers is a global competitor in manufacturing of concrete pumps, batching plants and boom pumps',
};
