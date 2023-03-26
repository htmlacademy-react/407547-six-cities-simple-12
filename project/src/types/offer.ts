export type LocationCity = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  location: LocationCity;
  name: string;
}

export type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type LocationOffer = {
  latitude: number;
  longitude: number;
  zoom: number;
  id?: number;
}

export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  id: number;
  images: string[];
  isPremium: boolean;
  location: LocationOffer;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: Host;
}
