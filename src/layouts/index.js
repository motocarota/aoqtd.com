import React from 'react';
import { AppShell } from '@mantine/core';
import { container } from './Layout.module.css';
import Top from '../components/Top';

function Layout({ children }) {
  return (
    <AppShell
      className={container}
      padding="md"
      navbar="navbar"
      header={<Top />}
    >
      {children}
    </AppShell>
  );
}

export default Layout;
