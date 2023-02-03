import { useEffect, useState } from 'react';
import fetchFn from '../utils/fetchFn';
import useIsAuth from './useIsAuth';

function useFetch(args) {
  const {
    url,
    method = 'GET',
    body,
    type = 'application/json',
    isPrivate = false,
  } = args;

  // skip auth api calls if not authenticated
  const isAuth = useIsAuth();
  if (isPrivate && !isAuth) {
    return {
      data: {},
      error: 'please login first',
      loading: false,
    };
  }

  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFn({
      url, method, body, type,
    })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, method, body, type]);

  return {
    data,
    error,
    loading,
  };
}

export default useFetch;
