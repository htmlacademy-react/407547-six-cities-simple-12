import UserLogged from '../user-logged/user-logged';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import UserNotLogged from '../user-not-logged/user-not-logged';

function HeaderNav(): JSX.Element {
  const authorizationStatus = useAppSelector(state => state.authorizationStatus);
  const userData = useAppSelector(state => state.userInfo);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  console.log(userData)

  return (
    <nav className="header__nav">
      {isAuth && userData ? <UserLogged userInfo = {userData}/> : <UserNotLogged/>}
    </nav>
  );
}

export default HeaderNav;
