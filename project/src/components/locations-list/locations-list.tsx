import {Cities} from "../../const";
import {Fragment, MouseEvent} from "react";
import {randomId} from "../../utils";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {changeCity, loadOffers} from "../../store/action";
import {NavLink} from "react-router-dom";

function LocationsList (): JSX.Element {
  const selectedCity = useAppSelector((state) => state.city);
  const dispatch = useAppDispatch();
  const setClasses = (city: string) => {
    return `locations__item-link tabs__item ${selectedCity === city ? 'tabs__item--active' : ''}`
  }
  const handleChangeCity = (evt: MouseEvent) => {
    evt.preventDefault();
    const target = evt.target as HTMLLIElement;
    if (target.tagName === 'SPAN') {
      dispatch(changeCity(target.innerHTML));
      dispatch(loadOffers())
    }
  }
  const tabs = Cities.map((city: string) =>
    <li
      className="locations__item"
      key={randomId()}
      onClick={handleChangeCity}
    >
        <NavLink to={'/'}
                 className={setClasses(city)}
        >
            <span>{city}</span>
        </NavLink>
    </li>
  )
  return (
    <Fragment>
      {tabs}
    </Fragment>
  )
}

export default LocationsList;
