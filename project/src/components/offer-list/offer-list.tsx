import {Offer} from "../../types/offer";
import Card from "../card/card";
import {MouseEvent, useState} from "react";

type OfferListProps = {
  offers: Offer[]
}

function OfferList(props: OfferListProps): JSX.Element {
  const {offers} = props;
  const [activeCard, setActiveCard] = useState<Offer | null>(null);
  const cards = offers.map((currentValue: Offer, index: number) => {
    return <Card key={index} offer={currentValue} />
  })
  return (
    <div
      className="cities__places-list places__list tabs__content"
      onMouseOver={(evt: MouseEvent<HTMLElement>) => {
        const target = evt.target as HTMLElement;
        const hasClass = target.classList.contains('place-card');
        const card = offers.find((item) => item.id === Number(target.dataset.id));
        if (hasClass && card) {
          setActiveCard(card);
          }
        }
      }
    >
      { cards }
    </div>
  )
}

export default OfferList;
