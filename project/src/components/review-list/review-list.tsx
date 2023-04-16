import {Review} from '../../types/offer';
import ReviewItem from '../review-item/review-item';
import {randomId} from '../../utils';
import {COMMENTS_MAX_QUANTITY, FIRST_COMMENT_INDEX} from '../../const';

type ReviewListProps = {
  reviews: Review[];
}
function ReviewList(props: ReviewListProps): JSX.Element {
  const {reviews} = props;
  const sortedComments = [...reviews].sort((prev, next) => prev.date < next.date ? 1 : -1);
  const displayedComments = sortedComments.slice(FIRST_COMMENT_INDEX, COMMENTS_MAX_QUANTITY);

  return (
    <ul className="reviews__list">
      {displayedComments.map((currentValue ) => (
        <ReviewItem key = {randomId()}
          review = {currentValue}
        />
      ))}
    </ul>
  );
}

export default ReviewList;
