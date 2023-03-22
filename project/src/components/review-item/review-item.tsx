import {Review} from '../../types/offer';
import {getStarRating, parseDate, randomId} from '../../utils';

type ReviewProps = {
  review: Review;
}
function ReviewItem(props: ReviewProps): JSX.Element {
  const {review} = props;
  const rating = getStarRating(review.rating);
  const dateReview = parseDate(review.date);
  return (
    <li className="reviews__item" key={randomId()}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl} width="54" height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{review.comment}</p>
        <time
          className="reviews__time"
          dateTime={`${dateReview.year}-${dateReview.month}-${dateReview.day}`}
        >
          {`${dateReview.longMonth} ${dateReview.year}`}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
