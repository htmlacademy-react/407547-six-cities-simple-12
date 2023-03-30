import {useEffect, useRef} from 'react';
import useMap from '../../hooks/useMap';
import {City, LocationOffer, Offer} from '../../types/offer';
import {Icon, Marker} from 'leaflet';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  offers: Offer[];
  setActiveCard: number | undefined;
  className: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map({city, offers, setActiveCard, className}: MapProps ): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const offersByCity = offers.filter((offer) => offer.city.name === city.name);
  const points = offersByCity.reduce((accum: LocationOffer[], currentValue) => {
    accum.push({
      ...currentValue.location,
      id: currentValue.id
    });
    return accum;
  }, []);

  useEffect(() => {
    if (map) {
      map.setView({
        lat: city.location.latitude,
        lng: city.location.longitude
      });
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });
        marker
          .setIcon(
            setActiveCard !== undefined && point.id === setActiveCard
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, setActiveCard]);

  return (
    <section className={className}
             style={{ height: '100vh' }}
             ref={mapRef}
    />
  );
}

export default Map;
