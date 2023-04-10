import {Cities, Sorting} from '../../const';
import {MouseEvent} from 'react';
import {randomId} from '../../utils';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity, changeOption, loadOffersByCity} from '../../store/offers-data/offers-data';
import {NavLink} from 'react-router-dom';
import cn from 'classnames';
import {getCity} from "../../store/offers-data/selectors";

function LocationsList (): JSX.Element {
  const selectedCity = useAppSelector(getCity);
  const dispatch = useAppDispatch();
  const handleChangeCity = (evt: MouseEvent) => {
    evt.preventDefault();
    const target = evt.target as HTMLLIElement;
    if (target.tagName === 'SPAN') {
      dispatch(changeCity(target.innerHTML));
      dispatch(loadOffersByCity);
      dispatch(changeOption(Sorting[0]));
    }
  };
  const tabs = Cities.map((city: string) =>
    (
      <li
        className="locations__item"
        key={randomId()}
        onClick={handleChangeCity}
      >
        <NavLink to={'/'}
          className= {cn(
            'locations__item-link tabs__item', {
              'tabs__item--active': selectedCity === city
            })}
        >
          <span>{city}</span>
        </NavLink>
      </li>)
  );
  return (
    <ul className="locations__list tabs__list">
      {tabs}
    </ul>
  );
}

export default LocationsList;
