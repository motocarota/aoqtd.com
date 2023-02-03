import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';
import fetchFn from '../utils/fetchFn';
import Register from './Register';
import Login from './Login';

import useRedirectToApp from '../hooks/useRedirectToApp';

const style = {
  container: {
    minWidth: '640px',
  },
};

function Authenticate() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [isLogin, setLogin] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useRedirectToApp();

  const switchTo = (dest) => {
    setLoading(false);
    setLogin(dest);
    setErrorMsg('');
  };

  const getOnSubmit = (url) => (body) => {
    if (isLoading) {
      return;
    }
    setLoading(true);

    fetchFn({
      url,
      method: 'POST',
      body,
    }).then(
      () => navigate('../../app'),
    ).catch(
      (err) => {
        console.error(err);
        setErrorMsg(err);
      },
    ).finally(
      () => setLoading(false),
    );
  };

  return (
    <div style={style.container}>
      <h1 className="center title">Please Authenticate</h1>
      {errorMsg && (
      <Notification color="warning">
        {errorMsg.message}
        <Button remove onClick={() => setErrorMsg(null)} />
      </Notification>
      )}
      {isLoading && 'Loading...'}
      <div className="column is-half m-auto">
        {(isLogin)
          ? (
            <Login
              isLoading={isLoading}
              toggle={() => switchTo(false)}
              getOnSubmit={getOnSubmit}
            />
          )
          : (
            <Register
              isLoading={isLoading}
              toggle={() => switchTo(true)}
              getOnSubmit={getOnSubmit}
            />
          )}
      </div>
    </div>
  );
}

export default Authenticate;
