import { useNavigate } from 'react-router-dom';
import openPopup from '../utils/openPopup';
import OAUTH_SERVICES from '../constants/oauthServices';
import { Button } from '@mantine/core';

const style = {
  logo: {
    width: '24px',
    height: '24px',
    marginRight: '10px',
    filter: 'invert(1)',
  },
};

function OAuthServices() {
  const navigate = useNavigate();
  const receiveMessage = (source) => {
    // if the source is our popup
    if (source === 'lma-login-redirect') {
      navigate('/app', { replace: true });
    }
  };

  return (
    <div>
      <hr />
      <p className="center">Or use an auth provider below</p>
      <div className="column m-10">
        {OAUTH_SERVICES.map(
          ({ id, label, color }) => (
            <Button
              key={id}
              rounded
              fullwidth
              className={`mb-1 ${color}`}
              onClick={() => openPopup({
                url: `api/account/service/${id}`,
                cb: receiveMessage,
                name: label,
              })}
            >
              <img src={`/${id}-logo.png`} alt={`${label} logo`} style={style.logo} />
              {label}
            </Button>
          ),
        )}
      </div>
    </div>
  );
}

export default OAuthServices;
