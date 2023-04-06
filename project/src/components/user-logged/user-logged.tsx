import {useAppDispatch} from '../../hooks';
import {logoutAction} from '../../store/api-actions';
import {Link} from 'react-router-dom';
import {UserData} from '../../types/user-data';

type UserLoggedProps = {
  userInfo: UserData;
}

function UserLogged(props: UserLoggedProps): JSX.Element {
  const {userInfo} = props;
  const dispatch = useAppDispatch();
  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <div className="header__nav-profile">
          <div className="header__avatar-wrapper user__avatar-wrapper">
            <img
              className="user__avatar"
              src={userInfo.avatarUrl}
              width="54"
              height="54"
              alt="User avatar"
            />
          </div>
          <span className="header__user-name user__name">{userInfo.email}</span>
        </div>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to="/"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}

export default UserLogged;
