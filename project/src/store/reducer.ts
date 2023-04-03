import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeOption, loadOffers} from './action';
import {Offer} from '../types/offer';
import {Cities, Sorting} from '../const';
import {offers} from '../mocks/offers';

type initialStateType = {
  city: string;
  offers: Offer[];
  option: string;
}

const initialState: initialStateType = {
  city: Cities[0],
  offers: [],
  option: Sorting[0]
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state) => {
      state.offers = offers.filter((offer) => offer.city.name === state.city);
    })
    .addCase(changeOption, (state, action) => {
      state.option = action.payload;
      switch (state.option) {
        case Sorting[0]:
          state.offers = offers;
          break;
        case Sorting[1]:
          state.offers = [...offers].sort((prev, next) => prev.price - next.price);
          break;
        case Sorting[2]:
          state.offers = [...offers].sort((prev, next) => next.price - prev.price);
          break;
        case Sorting[3]:
          state.offers = [...offers].sort((prev, next) => next.rating - prev.rating);
          break;
        default:
          state.offers = offers;
          break;
      }
    });
});

export {reducer};
