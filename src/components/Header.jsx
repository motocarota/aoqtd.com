import { Flex } from '@mantine/core';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Flex>
        <div href="#" renderAs={Link} to="/app">
          <img
            alt="Logo"
            src="/logo.png"
            height="55"
          />
        </div>
        <div href="#" renderAs={Link} to="/app">
          APP TITLE
        </div>
        <div renderAs={Link} to="/logout">
          Logout
        </div>
    </Flex>
  );
}

export default Header;
