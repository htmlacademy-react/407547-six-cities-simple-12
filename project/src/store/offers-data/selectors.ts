import {State} from '../../types/state';
import {Offer, Review} from '../../types/offer';
import {NameSpace} from '../../const';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getOffer = (state: State): Offer | undefined | null => state[NameSpace.Data].offer;
export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Data].nearbyOffers;
export const getOfferComments = (state: State): Review[] => state[NameSpace.Data].offerComments;
export const getOffersByCity = (state: State): Offer[] => state[NameSpace.Data].offersByCity;
export const getOffersDataLoading = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;
export const getCity = (state: State): string => state[NameSpace.Data].city;
export const getOption = (state: State): string => state[NameSpace.Data].option;
