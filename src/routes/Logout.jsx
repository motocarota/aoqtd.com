/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import fetchFn from '../utils/fetchFn';
import { Button } from '@mantine/core';
import { Text } from '@mantine/core';

function Logout() {
  const [, , removeCookie] = useCookies();
  useEffect(
    () => {
      removeCookie('email');
      fetchFn({
        url: 'account/logout',
      });
    },
    [],
  );

  return (
    <div className="columns is-centered">
      <div className="column is-half center">
        <Text>
          Succesfully logged out.
        </Text>
        <Button renderAs={Link} to="/auth">
          Login
        </Button>
      </div>
    </div>
  );
}

export default Logout;
