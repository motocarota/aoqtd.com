import Image from 'next/image';
import Link from 'next/link';
import {Box, Button, Group} from '@mantine/core';
import LocaleSwitcher from './LocaleSwitcher';
import Links from './Links';

const links = [
	{to: '01/000', label: 'Comic'},
	// {to: '/strip', label: 'Strips'},
	{to: 'monsters', label: 'Monsters'},
	{href: 'https://motocarota.art', label: 'Author'},
	{href: 'https://www.patreon.com/motocarota', label: 'Patreon'},
	{to: 'about', label: 'About'},
];

const Top = () => (
	<Group justify='center'>
		<Link href='/'>
			<Image src='/aoqtd-logo-sm.webp' height={180} width={240} alt='www.aoqtd.com logo' priority className='interactive'/>
		</Link>
		<Button.Group>
			<Links links={links} />
			<Box mx='md' my='xs'>
				<LocaleSwitcher />

			</Box>
		</Button.Group>
	</Group>
);

export default Top;
