import Image from 'next/image';
import Link from 'next/link';
import {Button, Group} from '@mantine/core';
import LocaleSwitcher from './LocaleSwitcher';
import {useRouter} from 'next/router';

const links = [
	{to: '01/000', label: 'Comic'},
	// {to: '/strip', label: 'Strips'},
	{to: 'monsters', label: 'Monsters'},
	{href: 'https://motocarota.art', label: 'Author'},
	{href: 'https://www.patreon.com/motocarota', label: 'Patreon'},
	{to: 'faq', label: 'FAQ'},
];

const Top = () => {
	const router = useRouter();
	const setPath = path => {
		const current = router.asPath;
		const lang = current.slice(0, 4);
		router.push(`/${lang}/${path}`);
	};

	return (
		<Group justify='center'>
			<Link href='/'>
				<Image src='/aoqtd-logo-sm.webp' height={180} width={240} alt='www.aoqtd.com logo' priority className='interactive'/>
			</Link>
			<Button.Group>
				<LocaleSwitcher />
				{links.map(({label, to, href}) => (
					(to)
						? <Button key={label} variant='subtle' onClick={() => setPath(to)}>{label}</Button>
						: <Button key={label} variant='subtle' component='a' href={`${href}`} target='_blank' rel='noreferrer'>{label}</Button>
				))}
			</Button.Group>
		</Group>
	);
};

export default Top;
