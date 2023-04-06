import {createAction} from '@reduxjs/toolkit';
import {Offer} from '../types/offer';
import {AppRoute, AuthorizationStatus} from '../const';
import {UserData} from '../types/user-data';

export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const changeCity = createAction<string>('offers/changeCity');

export const loadOffersByCity = createAction('offers/loadOffersByCity');

export const changeOption = createAction<string>('sort/changeOption');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('offers/redirectToRoute');

export const getUserInfo = createAction<UserData>('user/getUserInfo');
