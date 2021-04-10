// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json([
    {
      city: 'Pune (Head Office)',
      address:
        'Aquarius House, Sheelavihar Colony, Off Karve Road, Pune: 411038, India.',
      contact: '+91 2025445227',
      locate: 'https://goo.gl/maps/MyoDK',
    },
    {
      city: 'Ahmedabad',
      address:
        'U-8, B Wing, Samudra Complex, Sardar Patel Ring Road, Off C. G. Road, Near Hotel Classic Gold Navrangpura, Ahmedabad: 380006.',
      contact: '+91 8411020218',
      locate: 'Locate us',
    },
    {
      city: 'Hyderabad',
      address:
        '#142 C, Innovation Apts., Prender Ghast Road, Secunderabad: 500003.',
      contact: '+91 4040188102',
      locate: 'Locate us',
    },
    {
      city: 'Bengaluru',
      address:
        'Chamundi Mansion, #26, 22nd Main Road, J.P. Nagar, 2nd Phase, Marenahalli, Bengaluru: 560078',
      contact: '+91 8032900663',
      locate: 'Locate us',
    },
    {
      city: 'Indore',
      address:
        'G-1, Surya Apartment, 193, Anoop Nagar, A.B. Road, Indore - 452008(MP)',
      contact: '+91 9826046478',
      locate: 'Locate us',
    },
    {
      city: 'Chandigarh',
      address:
        'SCO-175, Sector- 39D, Near Police Station, Chandigarh - 160036.',
      contact: '+91 1725035188',
      locate: 'Locate us',
    },
    {
      city: 'Kolkata',
      address:
        'No. 13D, Ballygunge Place East, Ground Floor, Near Oxford House School, Jamini Roy Sarani, Kolkata - 700019.',
      contact: '+91 3340612128',
      locate: 'Locate us',
    },
    {
      city: 'Delhi',
      address:
        'Plot No. 24, Najafgarh Road, Industrial Area, First Floor, Near State Bank of India, New Delhi - 110015.',
      contact: '+91 1143306438',
      locate: 'Locate us',
    },
    {
      city: 'Mumbai',
      address:
        'Row House No. 02, Plot No. D47, Akshra CHS Sector 4, Airoli, Navi Mumbai - 400708',
      contact: '+91 8411020218',
      locate: 'Locate us',
    },
    {
      city: 'Jodhpur / Jaipur',
      address:
        '32-B,Bhagat Ki Kothi Extension, Opp-Jai Narayan Vyas University, Near Isuzu Showroom, Jodhpur - 342005 (Rajasthan)',
      contact: '+91 9882598881',
      locate: 'Locate us',
    },
    {
      city: 'Bhubaneshwar',
      address: 'Hig.8, Ground Floor, Mantri Vihar, Bhubaneshwar - 751016',
      contact: '+91 6742301330',
      locate: 'Locate us',
    },
  ]);
};
