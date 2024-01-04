import {Anchor, Center, Group, Space, Stack} from '@mantine/core';
import Image from 'next/image';
import Links from './Links';

const linksCol1 = [
	{label: 'About', to: 'about'},
	{label: 'Characters', to: 'characters'},
	{label: 'Monsters', to: 'monsters'},
	// {label: 'PNGs', to: 'pngs'},
	{label: 'Author', href: 'https://motocarota.art'},
];

const linksCol2 = [
	{label: 'Hall of Fame', to: 'hall-of-fame'},
	{label: 'Other webcomics', to: 'other-webcomics'},
	{label: 'Fan art', to: 'fan-art'},
	{label: 'd20 SRD', href: 'https://www.d20srd.org/'},
];

const linksCol3 = [
	{label: 'Join the party', href: 'https://www.patreon.com/motocarota'},
	{label: 'Report a typo', href: 'mailto:motocarota@gmail.com'},
	{label: 'Share to a friend', to: 'share'},
	{label: 'Send a suggestion', href: 'mailto:motocarota@gmail.com'},
];

const Footer = () => (
	<Center my='lg' mx='auto'>
		<Stack>
			<Group wrap='wrap'>
				<Links links={linksCol1} isVertical />
				<Links links={linksCol2} isVertical />
				<Links links={linksCol3} isVertical />
				<Space w={150}/>
				<Image src='/beholder.webp' width={150} height={188} alt='beholder'/>
			</Group>
			<small>Copyright ©2003-{new Date().getFullYear()} <Anchor href='https://motocarota.art' target='_blank' rel='noreferrer'>Simone Poggi</Anchor><br/>All Rights Reserved</small>
		</Stack>
	</Center>
);

export default Footer;
