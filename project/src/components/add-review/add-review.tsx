import {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {postOfferCommentAction} from '../../store/api-actions';
import {CommentData} from '../../types/comment-data';
import {useAppDispatch} from '../../hooks';
import ReviewStar from '../review-star/review-star';
import {REVIEW_STARS} from '../../const';

type AddReviewProps = {
  offerId: number;
}
function AddReview(props: AddReviewProps): JSX.Element {
  const {offerId} = props;
  const [isDisabled, setDisabled] = useState(true);
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const dispatch = useAppDispatch();

  const ratingChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };
  const reviewChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };

  useEffect(() => {
    if (rating && review.trim().length > 50) {
      setDisabled(false);
    }

  }, [review, rating, isDisabled]);

  const onSubmit = (value: CommentData) => {
    dispatch(postOfferCommentAction(value));
  };
  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSubmit({
      id: offerId,
      comment: review,
      rating: Number(rating)
    });
    setDisabled(true);
    setRating('');
    setReview('');
  };

  return (
    <form className="reviews__form form"
      action="#"
      method="post"
      onSubmit={submitHandler}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {REVIEW_STARS.map((star) => (
          <ReviewStar value={star.value}
            title={star.title}
            onChange={ratingChangeHandler}
            key={star.value}
            rating={rating}
          />))}
      </div>
      <textarea className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={reviewChangeHandler}
        value={review}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe
          your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button"
          type="submit"
          disabled={isDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default AddReview;
