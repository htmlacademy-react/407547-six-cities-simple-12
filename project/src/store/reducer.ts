import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  changeOption, getUserInfo,
  loadOffers,
  loadOffersByCity,
  requireAuthorization,
  setOffersDataLoadingStatus
} from './action';
import {Offer} from '../types/offer';
import {AuthorizationStatus, Cities, Sorting} from '../const';
import {UserData} from '../types/user-data';

type initialStateType = {
  city: string;
  offers: Offer[];
  isOffersDataLoading: boolean;
  option: string;
  offersByCity: Offer[];
  authorizationStatus: AuthorizationStatus;
  userInfo: UserData | null;
}

const initialState: initialStateType = {
  city: Cities[0],
  offers: [],
  isOffersDataLoading: false,
  option: Sorting[0],
  offersByCity: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  userInfo: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.offersByCity = state.offers.filter((offer) => offer.city.name === state.city);
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(loadOffersByCity, (state) => {
      state.offersByCity = state.offers.filter((offer) => offer.city.name === state.city);
    })
    .addCase(changeOption, (state, action) => {
      state.option = action.payload;
      switch (state.option) {
        case Sorting[0]:
          state.offersByCity = state.offers.filter((offer) => offer.city.name === state.city);
          break;
        case Sorting[1]:
          state.offersByCity = [...state.offersByCity].sort((prev, next) => prev.price - next.price);
          break;
        case Sorting[2]:
          state.offersByCity = [...state.offersByCity].sort((prev, next) => next.price - prev.price);
          break;
        case Sorting[3]:
          state.offersByCity = [...state.offersByCity].sort((prev, next) => next.rating - prev.rating);
          break;
        default:
          state.offersByCity = state.offers.filter((offer) => offer.city.name === state.city);
          break;
      }
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(getUserInfo, (state, action) => {
      state.userInfo = action.payload;
    });
});

export {reducer};
