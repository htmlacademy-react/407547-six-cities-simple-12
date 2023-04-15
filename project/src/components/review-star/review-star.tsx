import {ChangeEvent, Fragment} from 'react';

type ReviewStarProps = {
  value: number;
  title: string;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  rating: string;
}

function ReviewStar(props: ReviewStarProps): JSX.Element {
  const {value, title, onChange, rating} = props;
  const isChecked = rating === value.toString();
  return (
    <Fragment>
      <input className="form__rating-input visually-hidden"
        name="rating"
        value={`${value}`}
        id={`${value}-stars`}
        type="radio"
        onChange={onChange}
        checked={isChecked}
      />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={`${title}`}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}
export default ReviewStar;
