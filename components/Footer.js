import {Anchor, Center, Stack} from '@mantine/core';
// Import LocaleSwitcher from './LocaleSwitcher';
import {
	LanguageSwitcher,
} from 'next-export-i18n';

const Footer = () => (
	<Center my='lg' mx='auto'>
		<Stack>
			<LanguageSwitcher lang={'en'} />
			<LanguageSwitcher lang={'it'} />
			<small>Copyright ©2003-${new Date().getFullYear()} <Anchor href='https://motocarota.art' target='_blank' rel='noreferrer'>Simone Poggi</Anchor><br/>All Rights Reserved</small>
		</Stack>
	</Center>
);

export default Footer;
