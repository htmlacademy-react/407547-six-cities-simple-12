import {Offer} from '../../types/offer';
import Card from '../card/card';
import {randomId} from '../../utils';

type OfferListProps = {
  offers: Offer[];
  setActiveCard: (value: Offer | undefined) => void;
  className: string;
}

function OfferList(props: OfferListProps): JSX.Element {
  const {offers, setActiveCard, className} = props;
  return (
    <div className={className}>
      {offers.map((currentValue: Offer) => (
        <Card key={randomId()}
          offer={currentValue}
          setActiveCard={setActiveCard}
        />
      ))}
    </div>
  );
}

export default OfferList;
