import {MouseEvent, useState} from 'react';
import {Sorting} from '../../const';
import {randomId} from '../../utils';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeOption} from '../../store/action';

function SortOptions(): JSX.Element {
  const [isOpened, setOpened] = useState(false);
  const selectedOption = useAppSelector((state) => state.option);
  const dispatch = useAppDispatch();
  const setClasses = (option: string) => `places__option ${selectedOption === option ? 'places__option--active' : ''}`;
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
      className={setClasses(option)}
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
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        {options}
      </ul>
    </form>
  );
}

export default SortOptions;
