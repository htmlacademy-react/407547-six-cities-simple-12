import {Offer} from '../../types/offer';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {getStarRating} from '../../utils';

type CardProps = {
  offer: Offer;
  setActiveCard: (id: number | undefined) => void;
}

function Card(props: CardProps): JSX.Element {
  const {offer, setActiveCard} = props;
  const rating = getStarRating(offer.rating);

  return (
      <article className="cities__card place-card"
               onMouseOver={() => setActiveCard(offer.id)}
               onMouseLeave={() => setActiveCard(undefined)}
      >
        {
          offer.isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>
            <img className="place-card__image" src={offer.previewImage} width="260" height="200"
              alt={offer.title}
            />
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>

          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${rating}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>
  );
}
export default Card;
