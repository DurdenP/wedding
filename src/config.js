const gallery = [ // galley image list
  require('./Image/coming-soon.webp'),
];

export default {
  global: {
    googleMapAPIKey: 'AIzaSyDxafCn3Eicwhi3omoQzKw_qkmpQq2guVQ',
    comment: {
      livere: {
        enable: false, // if false, not rendering livere comment component
        service: 'city',
        uid: 'MTAyMC8yNTYzNi8yMjMy',
      },
      facebook: {
        enable: true, // if false, not rendering facebook comment component
        appId: '1535680996513864',
      },
    },
  },
  title: 'Matrimonio Davide e Sofia',
  wedding: {
    church: {
      name: 'Chiesa del Carmine',
      address: 'Via Circonvallazione, 44A, 92010 Siculiana AG, Italy',
      latitude: 37.33882187166443,
      longitude: 13.41998828157326,
    },
    place: {
      name: 'Parco Chiaramontano',
      address: 'Via Giovanni Amendola, 1, 92027 Licata AG, Italy',
      latitude: 37.104400122563746,
      longitude: 13.936244398132272,
    },
    at: '2022-08-29 16:00',
  },
  bridal: {
    name: 'Sofia',
    image: require('./Image/bridal1.jpeg'),
    phone: '+821011111111',
    facebook: false, // if false, not showing facebook icon
    father: '',
    mother: '',
    position: '',
  },
  groom: {
    name: 'Davide',
    image: require('./Image/davide_sofia.jpeg'),
    phone: '+821022222222',
    facebook: 'https://www.facebook.com/luckyyowu',
    father: '',
    mother: '',
    position: '',
  },
  image: {
    header: require('./Image/davide_sofia.jpeg'),
    gallery: gallery.map(item => ({
      original: item,
      thumbnail: item,
    })),
  },
};
