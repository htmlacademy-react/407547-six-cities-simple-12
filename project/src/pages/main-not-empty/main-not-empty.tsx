import SortOptions from "../../components/sort-options/sort-options";
import OfferList from "../../components/offer-list/offer-list";
import Map from "../../components/map/map";
import {City, Offer} from "../../types/offer";

type MainNotEmptyProps = {
  offers: Offer[];
  currentCity: string;
  setActiveCard: (id: number | undefined) => void;
  city: City;
  activeCard: number | undefined
}

function MainNotEmpty (props: MainNotEmptyProps): JSX.Element {
  const {offers, currentCity, setActiveCard, city, activeCard} = props
  return (
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
    </div>
  )
}

export default MainNotEmpty;
