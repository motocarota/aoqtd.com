import { useCookies } from 'react-cookie';
import _isEmpty from 'lodash/isEmpty';

function useIsAuth() {
  const [cookies] = useCookies();

  // NOTE
  // this is a very stupid auth check used on the client
  // just as a mean to redirect the user
  // a malicious user can easily circumvent this, anyway
  // the backend will do his own checks separately of course

  return !_isEmpty(cookies.email);
}

export default useIsAuth;
