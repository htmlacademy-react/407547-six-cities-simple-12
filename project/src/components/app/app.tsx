import Main from '../../pages/main/main';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Page404 from '../../pages/page-404/page-404';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import {AppRoute} from '../../const';
import {fetchHotelAction} from "../../store/api-actions";
import {store} from "../../store";
import {useAppSelector} from "../../hooks";
import Loading from "../loading/loading";

store.dispatch(fetchHotelAction());

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  if (isOffersDataLoading) {
    return <Loading/>
  }
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
