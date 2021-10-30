import { useHistory, useLocation } from 'react-router';

import s from './ButtonGoBack.module.scss';

export default function ButtonGoBack() {
  const history = useHistory();
  const location = useLocation();

  const handleGoBack = () => {
    if (location.state?.from) {
      history.push(location.state.from);
      // history.push(location.state.from ?? '/');
    }
  };

  return (
    <button type="button" className={s.btn} onClick={handleGoBack}>
      Go back
    </button>
  );
}
