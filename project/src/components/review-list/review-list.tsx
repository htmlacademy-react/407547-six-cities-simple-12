import {Review} from '../../types/offer';
import ReviewItem from '../review-item/review-item';
import {randomId} from '../../utils';

type ReviewListProps = {
  reviews: Review[];
}
function ReviewList(props: ReviewListProps): JSX.Element {
  const {reviews} = props;
  return (
    <ul className="reviews__list">
      {reviews.map((currentValue ) => (
        <ReviewItem
          key={randomId()}
          review={currentValue}
        />
      ))}
    </ul>
  );
}

export default ReviewList;
