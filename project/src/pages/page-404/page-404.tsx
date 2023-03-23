import './page-404.css';
import {Link} from 'react-router-dom';
function Page404(): JSX.Element {
  return (
    <section className="error-page container">
      <div className="error-page__wrapper">
        <h1 className="error-page__title">404</h1>
        <h3 className="error-page__text">Oops... Page Not Found!</h3>
        <p className="error-page__content">Try using the button below to go to main page of the site</p>
        <Link to="/" className="error-page__btn">Home Page</Link>
      </div>
    </section>
  );
}

export default Page404;
