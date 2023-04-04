import {loadOffers, setOffersDataLoadingStatus} from "./action";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {AppDispatch, State} from "../types/state";
import {APIRoute} from "../const";
import {AxiosInstance} from "axios";
import {Offer} from "../types/offer";

export const fetchHotelAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuestions',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offer[]>(APIRoute.Hotels);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);
