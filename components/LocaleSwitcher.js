import {Button, ButtonGroup} from '@mantine/core';
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function LocaleSwitcher() {
	const router = useRouter();
	const {locales, locale: activeLocale} = router;

	if (locales.length < 2) {
		return null;
	}

	return (
		<ButtonGroup mx='auto'>
			{locales.map(l => {
				const {pathname, query, asPath} = router;
				return (
					<Button
						key={l}
						component={Link}
						variant={activeLocale === l ? 'outline' : 'subtle'}
						href={{pathname, query}}
						as={asPath}
						locale={l}
					>
						{l}
					</Button>
				);
			})}
		</ButtonGroup>
	);
}
