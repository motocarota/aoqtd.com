import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useIsAuth from './useIsAuth';

// if the user is authenticated
// navigates to the main app
// no need to stay on login/register pages
function useRedirectToApp() {
  const navigate = useNavigate();
  const isAuth = useIsAuth();

  useEffect(
    () => {
      if (isAuth) {
        navigate('/app', { replace: true });
      }
    },
    [],
  );
}

export default useRedirectToApp;
