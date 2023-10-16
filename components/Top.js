import Image from 'next/image';
import Link from 'next/link';
import {Button, Group} from '@mantine/core';

const links = [
	{to: '/it/01/000', label: 'Comic'},
	{to: '/strip', label: 'Strips'},
	{to: '/monsters', label: 'Monsters'},
	{href: 'https://motocarota.art', label: 'Author'},
	{href: 'https://www.patreon.com/motocarota', label: 'Patreon'},
	{to: '/faq', label: 'FAQ'},
];

const Top = () => (
	<Group justify='center'>
		<Link href='/'>
			<Image src='/aoqtd-logo-sm.webp' height={160} width={220} alt='www.aoqtd.com logo' priority className='interactive'/>
		</Link>
		<Button.Group>
			{links.map(({label, to, href}) => (
				(to)
					? <Button key={label} variant='subtle' component={Link} href={to}>{label}</Button>
					: <Button key={label} variant='subtle' component='a' href={href} target='_blank' rel='noreferrer'>{label}</Button>
			))}
		</Button.Group>
	</Group>
);

export default Top;
