import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<string>('offers/changeCity');

export const loadOffers = createAction('offers/loadOffers');

export const changeOption = createAction<string>('sort/changeOption');
