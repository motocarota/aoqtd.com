import {Button, Flex} from '@mantine/core';
import {useRouter} from 'next/router';

const Links = props => {
	const {
		links,
		variant = 'subtle',
		isVertical = false,
	} = props;
	const router = useRouter();
	const setPath = path => {
		const current = router.asPath;
		const lang = current.slice(0, 4);
		router.push(`/${lang}/${path}`);
	};

	return (
		<Flex direction={isVertical ? 'column' : 'row'}>
			{links.map(({label, to, href}) => (
				(to)
					? <Button key={label} variant={variant} onClick={() => setPath(to)}>{label}</Button>
					: <Button key={label} variant={variant} component='a' href={`${href}`} target='_blank' rel='noreferrer'>{label}</Button>
			))}
		</Flex>
	);
};

export default Links;
