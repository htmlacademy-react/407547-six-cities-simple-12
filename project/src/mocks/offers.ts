import {Offer} from '../types/offer';
import {OfferType, AVATAR_URL} from '../const';

export const offers: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 48.856614,
        longitude: 2.352222,
        zoom: 10
      },
      name: 'Paris'
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Washing machine',
      'Coffee machine',
      'Dishwasher',
      'Towels',
      'Baby seat',
      'Cabel TV'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 13,
      isPro: true,
      name: 'Nick'
    },
    id: 1,
    images: [
      'img/mocks/1-1.jpg',
      'img/mocks/1-2.jpg',
      'img/mocks/1-3.jpg',
      'img/mocks/1-4.jpg',
      'img/mocks/1-5.jpg',
      'img/mocks/1-6.jpg',
    ],
    isPremium: true,
    location: {
      latitude: 48.85610,
      longitude: 2.35029,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/mocks/1-1.jpg',
    price: 150,
    rating: 4.7,
    title: 'Beautiful & luxurious studio at great location',
    type: OfferType.Apartment,
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 48.856614,
        longitude: 2.352222,
        zoom: 10
      },
      name: 'Paris'
    },
    description: 'Principes definitiones ut vix, te pri simul volumus. Ei adhuc scaevola interpretaris quo, in epicurei pertinax invenire his, has at semper doctus abhorreant. Ad viris voluptatibus quo, graece referrentur deterruisset no mel. Mei id rebum percipit, eam an nullam nusquam comprehensam.',
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Washing machine',
      'Coffee machine',
      'Cabel TV'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 26,
      isPro: false,
      name: 'Alice'
    },
    id: 2,
    images: [
      'img/mocks/2-1.jpg',
      'img/mocks/2-2.jpg',
      'img/mocks/2-3.jpg',
      'img/mocks/2-4.jpg',
      'img/mocks/2-5.jpg',
      'img/mocks/2-6.jpg',
    ],
    isPremium: false,
    location: {
      latitude: 48.85596,
      longitude: 2.35375,
      zoom: 8
    },
    maxAdults: 3,
    previewImage: 'img/mocks/2-1.jpg',
    price: 95,
    rating: 3.2,
    title: 'Wood and stone place',
    type: OfferType.Apartment,
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam'
    },
    description: 'Mel an quot latine, est ludus sanctus liberavisse te. Postulant constituto an per, sit in putant malorum sadipscing. Tale praesent at qui, noster delenit an pro. Iisque virtute ius in, eu eos bonorum atomorum, ea eam eros audire patrioque. Pri elitr eruditi ei, nibh indoctum ex mel, vim ne libris sensibus recteque.',
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Washing machine',
      'Coffee machine',
      'Cabel TV'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 32,
      isPro: true,
      name: 'Jack'
    },
    id: 3,
    images: [
      'img/mocks/3-1.jpg',
      'img/mocks/3-2.jpg',
      'img/mocks/3-3.jpg',
      'img/mocks/3-4.jpg',
      'img/mocks/3-5.jpg',
      'img/mocks/3-6.jpg'
    ],
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/mocks/3-1.jpg',
    price: 85,
    rating: 4.0,
    title: 'Canal View Prinsengracht',
    type: OfferType.Apartment,
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 51.09662,
        longitude: 7.03674,
        zoom: 10
      },
      name: 'Dusseldorf'
    },
    description: 'Illum consequat sea in. Te liber aperiam his, per ea nominavi appetere. Iisque tamquam cu sit. Nam perfecto recusabo id, habeo dolor expetenda no sit, eos at altera denique. Est facilis volumus consectetuer cu, te utamur alienum contentiones nec. Prima ceteros verterem has an, aliquip cotidieque ea nec.',
    goods: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Fridge',
      'Washing machine',
      'Cabel TV'
    ],
    host: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 14,
      isPro: true,
      name: 'Catherine'
    },
    id: 4,
    images: [
      'img/mocks/4-1.jpg',
      'img/mocks/4-2.jpg',
      'img/mocks/4-3.jpg',
      'img/mocks/4-4.jpg',
      'img/mocks/4-5.jpg',
      'img/mocks/4-6.jpg'
    ],
    isPremium: true,
    location: {
      latitude: 51.21971,
      longitude: 6.77917,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/mocks/4-1.jpg',
    price: 90,
    rating: 4.5,
    title: 'Canal View Prinsengracht',
    type: OfferType.PrivateRoom,
  },
];
