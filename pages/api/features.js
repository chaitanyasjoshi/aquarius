export default (req, res) => {
  res.status(200).json([
    {
      icon: 'manual',
      title: 'Service manuals',
      description:
        'Elaborated operation and service manuals with easy to read instructions are provided with every equipment.',
    },
    {
      icon: 'van',
      title: 'Service vans',
      description:
        'Systematically equipped vans have been introduced in primary cities to offer rapid on-site services to our prominent customers.',
    },
    {
      icon: 'support',
      title: 'Customer support',
      description:
        'Aquarius provides excellent spare part support and software support for the fully automatic operation of concrete batching plants.',
    },
    {
      icon: 'backup',
      title: 'Service backup',
      description:
        'Our domestic service back up is accessible at multiple cities including Delhi, Mumbai, Bengaluru, Kolkata, Hydrabad and many more.',
    },
    {
      icon: 'refurbish',
      title: 'Refurbishment',
      description:
        'Aquarius provides incredible refurbishment services adding more years to the performing life of the equipment.',
    },
    {
      icon: 'turnkey',
      title: 'Turnkey Projects',
      description:
        'Aquarius turnkey projects division takes on the entire responsibility from concept to commissioning of concrete batching plants.',
    },
  ]);
};
