import * as React from 'react';
import {
  Anchor,
  Burger, Header, MediaQuery,
} from '@mantine/core';
import { Link } from 'gatsby';

function Top() {
  const [opened, setOpened] = React.useState(false);

  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            mr="xl"
          />
        </MediaQuery>
        <Anchor component={Link} to="/">
          Another One Quest to Dust
        </Anchor>
      </div>
    </Header>
  );
}

export default Top;
