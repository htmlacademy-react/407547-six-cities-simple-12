import {
  getUserInfo, loadComments, loadNearbyOffers,
  loadOffer,
  loadOffers,
  redirectToRoute,
  requireAuthorization,
  setOffersDataLoadingStatus
} from './action';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {AxiosInstance} from 'axios';
import {Offer, Review} from '../types/offer';
import {dropToken, saveToken} from '../services/token';
import {UserData} from '../types/user-data';
import {AuthData} from '../types/auth-data';

export const fetchHotelAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Hotels);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchOfferByIdAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer>(`${APIRoute.Hotels}/${id}`);
      dispatch(loadOffer(data));
    } catch (err) {
      dispatch(loadOffer(undefined))
    }
  },
)

export const fetchNearbyOffersAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(`${APIRoute.Hotels}/${id}/nearby`);
      dispatch(loadNearbyOffers(data));
    } catch (err) {
      dispatch(loadNearbyOffers([]))
    }
  },
)

export const fetchCommentsOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${id}`);
      dispatch(loadComments(data));
    } catch (err) {
      dispatch(loadComments([]))
    }
  },
)

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(getUserInfo(data));
    dispatch(redirectToRoute(AppRoute.Root));
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
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
