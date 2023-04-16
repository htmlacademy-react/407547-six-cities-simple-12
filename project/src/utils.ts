import { v4 as uuidv4 } from 'uuid';
import {City} from './types/offer';
export const randomId = () => uuidv4();
export const getStarRating = (value: number) => Math.round((Math.round(value) * 100) / 5);

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

export const getLocation = (city: string, locations: City[]) => locations.find((location) => location.name === city);
