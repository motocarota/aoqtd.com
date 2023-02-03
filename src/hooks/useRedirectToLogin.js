import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useIsAuth from './useIsAuth';

// if the user is not authenticated yet
// navigate to login/register page
function useRedirectToLogin() {
  const navigate = useNavigate();
  const isAuth = useIsAuth();

  useEffect(
    () => {
      if (!isAuth) {
        navigate('/auth', { replace: true });
      }
    },
    [],
  );
}

export default useRedirectToLogin;
