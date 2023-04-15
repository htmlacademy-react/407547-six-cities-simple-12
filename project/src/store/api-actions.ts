import {redirectToRoute} from './action';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {APIRoute, AppRoute} from '../const';
import {AxiosInstance} from 'axios';
import {Offer, Review} from '../types/offer';
import {dropToken, saveToken} from '../services/token';
import {UserData} from '../types/user-data';
import {AuthData} from '../types/auth-data';
import {CommentData} from '../types/comment-data';

export const fetchHotelAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchHotel',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Hotels);
    return data;
  },
);

export const fetchOfferByIdAction = createAsyncThunk<Offer | undefined, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferById',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Hotels}/${id}`);
      return data;
    } catch (err) {
      return undefined;
    }
  },
);

export const fetchNearbyOffersAction = createAsyncThunk<Offer[] | [], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearbyOffers',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(`${APIRoute.Hotels}/${id}/nearby`);
      return data;
    } catch (err) {
      return [];
    }
  },
);

export const fetchCommentsOfferAction = createAsyncThunk<Review[] | [], number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCommentsOffer',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
      return data;
    } catch (err) {
      return [];
    }
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);
export const postOfferCommentAction = createAsyncThunk<Review[], CommentData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/offerComment',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<Review[]>(`${APIRoute.Comments}/${id}`, {comment, rating});
    return data;
  },
);
