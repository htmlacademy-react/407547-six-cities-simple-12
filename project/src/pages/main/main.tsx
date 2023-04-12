import Header from '../../components/header/header';
import {Fragment, useState} from 'react';
import LocationsList from '../../components/locations-list/locations-list';
import {getLocation} from '../../utils';
import {AuthorizationStatus, Locations} from '../../const';
import {City} from '../../types/offer';
import {useAppSelector} from '../../hooks';
import MainEmpty from '../main-empty/main-empty';
import Loading from '../../components/loading/loading';
import cn from 'classnames';
import {getCity, getOffersDataLoading} from '../../store/offers-data/selectors';
import {getOffersByCity} from '../../store/offers-data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import MainNotEmpty from "../main-not-empty/main-not-empty";

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
          {
            offers.length === 0 ?
            <MainEmpty currentCity = {currentCity}/> :
            <MainNotEmpty offers={offers}
                          currentCity={currentCity}
                          setActiveCard={setActiveCard}
                          city={city}
                          activeCard={activeCard}
            />
          }
        </div>
      </main>
    </Fragment>
  );
}
export default Main;
