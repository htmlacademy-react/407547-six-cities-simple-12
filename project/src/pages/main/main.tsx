import Header from '../../components/header/header';
import {Fragment, useState} from 'react';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import LocationsList from '../../components/locations-list/locations-list';
import {getLocation} from '../../utils';
import {AuthorizationStatus, Locations} from '../../const';
import {City} from '../../types/offer';
import {useAppDispatch, useAppSelector} from '../../hooks';
import MainEmpty from '../main-empty/main-empty';
import SortOptions from '../../components/sort-options/sort-options';
import Loading from '../../components/loading/loading';
import cn from 'classnames';
import {getCity, getOffersDataLoading} from "../../store/offers-data/selectors";
import {getOffersByCity} from "../../store/offers-data/selectors";
import {getAuthorizationStatus} from "../../store/user-process/selectors";
import {loadOffersByCity} from "../../store/offers-data/offers-data";

function Main(): JSX.Element {
  const [activeCard, setActiveCard] = useState< undefined | number >(undefined);
  const currentCity = useAppSelector(getCity);
  const offers = useAppSelector(getOffersByCity);
  const city = getLocation(currentCity, Locations) as City;

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getOffersDataLoading);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return <Loading/>;
  }

  return (
    <Fragment>
      {<Header />}
      <main className={cn(
        'page__main page__main--index', {
          'page__main--index-empty': offers.length === 0
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList/>
          </section>
        </div>
        <div className="cities">
          {offers.length === 0 ? <MainEmpty currentCity = {currentCity}/> :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {currentCity}</b>
                <SortOptions/>
                {
                  <OfferList offers = {offers}
                    setActiveCard = {setActiveCard}
                    className = {'cities__places-list places__list tabs__content'}
                  />
                }
              </section>
              <div className="cities__right-section">
                <Map className='cities__map map'
                  city = {city}
                  offers = {offers}
                  setActiveCard = {activeCard}
                />
              </div>
            </div>}
        </div>
      </main>
    </Fragment>
  );
}
export default Main;
