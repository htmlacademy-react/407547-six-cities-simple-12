import {MouseEvent, useState} from 'react';
import {Sorting} from '../../const';
import {randomId} from '../../utils';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeOption} from '../../store/action';
import cn from 'classnames';

function SortOptions(): JSX.Element {
  const [isOpened, setOpened] = useState(false);
  const selectedOption = useAppSelector((state) => state.option);
  const dispatch = useAppDispatch();
  const handleOnClick = (evt: MouseEvent) => {
    setOpened(!isOpened);
    const target = evt.target as HTMLLIElement;
    if (target.classList.contains('places__option')) {
      const option = target.dataset.option as string;
      dispatch(changeOption(option));
    }
  };
  const options = Sorting.map((option) => (
    <li
      className={cn(
        'places__option', {
          'places__option--active': selectedOption === option
        })}
      key={randomId()}
      tabIndex={0}
      data-option={option}
    >
      {option}
    </li>
  ));

  return (
    <form className="places__sorting" action="#" method="get" onClick={handleOnClick}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {selectedOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn(
        'places__options places__options--custom', {
          'places__options--opened': isOpened
        })}
      >
        {options}
      </ul>
    </form>
  );
}

export default SortOptions;
