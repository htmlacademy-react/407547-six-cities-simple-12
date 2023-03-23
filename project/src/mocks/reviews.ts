import {Review} from '../types/offer';
import {AVATAR_URL} from '../const';

export const reviews: Review[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam',
    date: 'Mon Mar 13 2023 14:55:09 GMT+0200 (Восточная Европа, стандартное время)',
    id: 1,
    rating: 5,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 2,
      isPro: false,
      name: 'Oliver'
    }
  },
  {
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    date: 'Mon Mar 13 2023 16:10:13 GMT+0200 (Восточная Европа, стандартное время)',
    id: 2,
    rating: 4,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 16,
      isPro: false,
      name: 'Andrey'
    }
  },
  {
    comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.',
    date: 'Sun Dec 04 2022 18:54:13 GMT+0200 (Восточная Европа, стандартное время)',
    id: 2,
    rating: 3,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 8,
      isPro: true,
      name: 'Jack'
    }
  },
  {
    comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.',
    date: 'Wed Feb 15 2023 12:23:12 GMT+0200 (Восточная Европа, стандартное время)',
    id: 2,
    rating: 3,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 13,
      isPro: true,
      name: 'Hanna'
    }
  },
  {
    comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
    date: 'Sun Apr 23 2023 14:01:22 GMT+0200 (Восточная Европа, стандартное время)',
    id: 4,
    rating: 2,
    user: {
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      id: 13,
      isPro: true,
      name: 'Harry'
    }
  }
];
