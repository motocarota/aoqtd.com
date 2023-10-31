import {Anchor, Center, Stack} from '@mantine/core';
import LocaleSwitcher from './LocaleSwitcher';

const Footer = () => (
	<Center my='lg' mx='auto'>
		<Stack>
			<LocaleSwitcher />
			<small>Copyright ©2003-${new Date().getFullYear()} <Anchor href='https://motocarota.art' target='_blank' rel='noreferrer'>Simone Poggi</Anchor><br/>All Rights Reserved</small>
		</Stack>
	</Center>
);

export default Footer;
