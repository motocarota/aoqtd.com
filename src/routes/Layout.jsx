import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import useRedirectToLogin from '../hooks/useRedirectToLogin';
import { Button } from '@mantine/core';

function Layout() {
  useRedirectToLogin();
  const { t, i18n } = useTranslation();

  return (
    <>
      <div>
        <h2>{t('Welcome to React')}</h2>
        <Button onClick={() => i18n.changeLanguage('it')}>ITALIANO</Button>
        <Button onClick={() => i18n.changeLanguage('en')}>ENGLISH</Button>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
