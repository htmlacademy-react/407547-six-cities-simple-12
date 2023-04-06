import Main from '../../pages/main/main';
import {Route, Routes} from 'react-router-dom';
import Page404 from '../../pages/page-404/page-404';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import {AppRoute, AuthorizationStatus} from '../../const';
import {checkAuthAction, fetchHotelAction} from '../../store/api-actions';
import {store} from '../../store';
import {useAppSelector} from '../../hooks';
import Loading from '../loading/loading';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

store.dispatch(fetchHotelAction());
store.dispatch(checkAuthAction());

function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
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
    </HistoryRouter>
  );
}

export default App;
