import {createAction} from '@reduxjs/toolkit';
import {Offer} from "../types/offer";

export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const changeCity = createAction<string>('offers/changeCity');

export const loadOffersByCity = createAction('offers/loadOffersByCity');

export const changeOption = createAction<string>('sort/changeOption');
