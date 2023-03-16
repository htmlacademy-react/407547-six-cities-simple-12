import {Offer} from '../../types/offer';
import Card from '../card/card';
import {useState} from 'react';
import {randomId} from '../../utils';

type OfferListProps = {
  offers: Offer[];
}

function OfferList(props: OfferListProps): JSX.Element {
  const {offers} = props;
  const [, setActiveCard] = useState<number | null>(null);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((currentValue: Offer) => (
        <Card
          key={randomId()}
          offer={currentValue}
          onMouseOver={() => setActiveCard(currentValue.id)}
        />
      ))}
    </div>
  );
}

export default OfferList;
