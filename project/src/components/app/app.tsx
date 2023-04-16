import Main from '../../pages/main/main';
import {Route, Routes} from 'react-router-dom';
import Page404 from '../../pages/page-404/page-404';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import {AppRoute} from '../../const';
import {checkAuthAction, fetchHotelAction} from '../../store/api-actions';
import {store} from '../../store';
import {useAppSelector} from '../../hooks';
import {getOffersDataLoading} from '../../store/offers-data/selectors';
import Loading from '../loading/loading';

const isToken = localStorage.getItem('six-cities-simple');
if (isToken) {
  store.dispatch(checkAuthAction());
}

store.dispatch(fetchHotelAction());

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector(getOffersDataLoading);

  if (isOffersDataLoading) {
    return <Loading/>;
  }
  return (
    <Routes>
      <Route
        path={AppRoute.Root}
        element={<Main/>}
      />
      <Route
        path={AppRoute.Login}
        element={<Login/>}
      />
      <Route
        path={`${AppRoute.Offer}/:id`}
        element={<Room/>}
      />
      <Route
        path="*"
        element={<Page404/>}
      />
    </Routes>
  );
}

export default App;
