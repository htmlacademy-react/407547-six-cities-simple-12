import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Cities, NameSpace, Sorting} from "../../const";
import {Offer, Review} from "../../types/offer";
import {
  fetchCommentsOfferAction,
  fetchHotelAction,
  fetchNearbyOffersAction,
  fetchOfferByIdAction, postOfferCommentAction
} from '../api-actions';

type initialStateType = {
  offers: Offer[];
  offer: Offer | undefined | null;
  nearbyOffers: Offer[];
  offerComments: Review[];
  isOffersDataLoading: boolean;
  city: string;
  offersByCity: Offer[];
  option: string;
}

const initialState: initialStateType = {
  city: Cities[0],
  offers: [],
  offer: null,
  nearbyOffers: [],
  offerComments: [],
  offersByCity: [],
  isOffersDataLoading: false,
  option: Sorting[0]
};

export const offersData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
    loadOffersByCity: (state ) => {
      state.offersByCity = state.offers.filter((offer) => offer.city.name === state.city);
    },
    changeOption: (state, action) => {
      const option = action.payload;
      switch (option) {
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
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchHotelAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchHotelAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchCommentsOfferAction.fulfilled, (state, action) => {
        state.offerComments = action.payload;
      })
      .addCase(postOfferCommentAction.fulfilled, (state, action) => {
        state.offerComments = action.payload;
      });
  }
})

export const {changeCity, loadOffersByCity, changeOption} = offersData.actions;
