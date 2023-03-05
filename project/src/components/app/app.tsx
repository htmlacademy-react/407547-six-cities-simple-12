import Main from '../../pages/main/main';
import {OfferCount} from '../../types/offer-count';

function App({count}: OfferCount): JSX.Element {
  return <Main count = {count}/>;
}

export default App;
