import {createReducer} from '@reduxjs/toolkit';
import {changeCity, loadOffers} from './action';
import {Offer} from '../types/offer';
import {Cities} from '../const';
import {offers} from '../mocks/offers';

type initialStateType = {
  city: string;
  offers: Offer[];
}

const initialState: initialStateType = {
  city: Cities[0],
  offers: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state) => {
      state.offers = offers.filter((offer) => offer.city.name === state.city);
    });
});

export {reducer};
