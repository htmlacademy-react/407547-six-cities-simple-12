import Main from "../../pages/main/main";
import {AppProps} from '../../types/app-props';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Page404 from "../../pages/page-404/page-404";
import Login from "../../pages/login/login";
import Room from "../../pages/room/room";
import {AppRoute} from "../../const";

function App({count, offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
          <Main
            count = {count}
            offers = {offers}
          />}
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
  )
}

export default App;
