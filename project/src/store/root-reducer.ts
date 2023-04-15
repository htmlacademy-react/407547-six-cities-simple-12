import {NameSpace} from '../const';
import {combineReducers} from '@reduxjs/toolkit';
import {userProcess} from './user-process/user-process';
import {offersData} from './offers-data/offers-data';
export const rootReducer = combineReducers({
  [NameSpace.Data]: offersData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
