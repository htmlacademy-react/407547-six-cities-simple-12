import Header from '../../components/header/header';
import {useParams} from 'react-router-dom';
import {getStarRating} from '../../utils';
import AddReview from '../../components/add-review/add-review';
import {randomId} from '../../utils';
import Map from '../../components/map/map';
import OfferList from '../../components/offer-list/offer-list';
import {useEffect, useState} from 'react';
import ReviewList from '../../components/review-list/review-list';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchCommentsOfferAction, fetchNearbyOffersAction, fetchOfferByIdAction} from '../../store/api-actions';
import Loading from '../../components/loading/loading';
import Page404 from '../page-404/page-404';
import cn from 'classnames';
import {AuthorizationStatus, FIRST_IMAGE_INDEX, IMAGES_MAX_QUANTITY} from '../../const';
import {getNearbyOffers, getOffer, getOfferComments} from '../../store/offers-data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {Offer} from '../../types/offer';

function Room(): JSX.Element {
  // Get the offerId param from the URL
  const params = useParams();
  const offerId = Number(params.id);

  const offer = useAppSelector(getOffer);
  const offersNeighbourhood = useAppSelector(getNearbyOffers);
  const offerReviews = useAppSelector(getOfferComments);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();

  const [, setActiveCard] = useState<Offer | undefined>(undefined);

  useEffect(() => {
    dispatch(fetchOfferByIdAction(offerId));
    dispatch(fetchNearbyOffersAction(offerId));
    dispatch(fetchCommentsOfferAction(offerId));
  }, [offerId, dispatch]);

  if (offer === undefined) {
    return <Page404/>;
  }

  if (!offer) {
    return <Loading/>;
  }
  //Goods
  const generateGoods = () => {
    if (!offer.goods.length) {
      return (<h3>Not goods</h3>);
    }
    const goods = offer.goods.map((currentValue) => (
      <li className="property__inside-item" key={randomId()}>{currentValue}</li>
    ));
    return goods;
  };
  //Images
  const generateImages = () => {
    if (!offer.images.length) {
      return (<h3>Not images</h3>);
    }
    const images = offer.images.slice(FIRST_IMAGE_INDEX, IMAGES_MAX_QUANTITY).map((currentValue) => (
      <div className="property__image-wrapper" key={randomId()}>
        <img className="property__image" src={currentValue} alt={offer.title}/>
      </div>
    ));
    return images;
  };

  const images = generateImages();
  const goods = generateGoods();
  const offerStartRating = getStarRating(offer.rating);

  return (
    <div className="page">
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path
              d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"
            >
            </path>
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path fillRule="evenodd" clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            >
            </path>
          </symbol>
        </svg>
      </div>
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {
                offer.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${offerStartRating}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={cn(
                    'property__avatar-wrapper',
                    'user__avatar-wrapper', {
                      'property__avatar-wrapper--pro': offer.host.isPro
                    })}
                  >
                    <img className="property__avatar user__avatar"
                      src={offer.host.avatarUrl} width="74" height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">
                    {offer.host.name}
                  </span>
                  {
                    offer.host.isPro &&
                    <span className="property__user-status">
                        Pro
                    </span>
                  }
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{offerReviews.length}</span></h2>
                <ReviewList reviews = {offerReviews}/>
                {authorizationStatus === AuthorizationStatus.Auth && <AddReview offerId = {offerId}/>}
              </section>
            </div>
          </div>
          <Map city = {offer.city}
            offers = {[...offersNeighbourhood, offer]}
            setActiveCard = {offer}
            className = {'property__map map'}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferList offers = {offersNeighbourhood}
              setActiveCard = {setActiveCard}
              className = {'near-places__list places__list'}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Room;
