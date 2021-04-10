import Feature from './Feature';

export default function FeaturesHome({ features }) {
  return (
    <section className='relative py-16 text-center'>
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className='absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none'
        aria-hidden='true'
      ></div>

      <div className='relative max-w-7xl mx-auto px-6 sm:px-8'>
        <div className='py-12 md:py-20'>
          {/* Section header */}
          <h2 className='pb-3 text-4xl md:text-5xl font-semibold'>
            Why choose us?
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl m-auto pb-16'>
            With a contistent focus on delivering international quality
            products, Aquarius offers the latest in technology from its
            extensive equipment portfolio
          </p>
          {/* Section content */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl m-auto'>
            {features.map((feature, i) => (
              <Feature
                key={i}
                icon={feature.icon}
                title={feature.title}
                desc={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
