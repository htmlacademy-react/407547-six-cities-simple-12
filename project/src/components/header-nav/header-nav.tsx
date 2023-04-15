import UserLogged from '../user-logged/user-logged';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import UserNotLogged from '../user-not-logged/user-not-logged';
import {getAuthorizationStatus, getUserInfo} from '../../store/user-process/selectors';

function HeaderNav(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUserInfo);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <nav className="header__nav">
      {isAuth && userData ? <UserLogged userInfo = {userData}/> : <UserNotLogged/>}
    </nav>
  );
}

export default HeaderNav;
