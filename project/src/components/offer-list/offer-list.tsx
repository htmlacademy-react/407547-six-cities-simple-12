import {Offer} from '../../types/offer';
import Card from '../card/card';
import {randomId} from '../../utils';

type OfferListProps = {
  offers: Offer[];
  setActiveCard: (id: number | undefined) => void;
}

function OfferList(props: OfferListProps): JSX.Element {
  const {offers, setActiveCard} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((currentValue: Offer) => (
        <Card
          key={randomId()}
          offer={currentValue}
          setActiveCard={setActiveCard}
        />
      ))}
    </div>
  );
}

export default OfferList;
