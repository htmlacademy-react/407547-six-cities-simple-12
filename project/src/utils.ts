import { v4 as uuidv4 } from 'uuid';
import {City, Offer} from "./types/offer";
export const randomId = () => uuidv4();
export const getStarRating = (value: number) => Math.floor((value * 100) / 5);

export const parseDate = (value: string) => {
  const locale = 'en-US';
  const date = new Date(value);
  return {
    year: date.toLocaleString(locale, {year: 'numeric'}),
    month: date.toLocaleString(locale, {month: '2-digit'}),
    longMonth: date.toLocaleString(locale, {month: 'long'}),
    day: date.toLocaleString(locale, {day: 'numeric'}),
  };
};

export const getOffersByCity = (city: string, offers: Offer[]) => {
  return offers.filter(offer => offer.city.name === city)
}

export const getLocation = (city: string, locations: City[]) => {
  return locations.find(location => location.name === city)
}
