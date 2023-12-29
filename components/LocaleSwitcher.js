import _toUpper from 'lodash/toUpper';
import {Button} from '@mantine/core';
import {LOCALES} from '@/app.config';
import {useRouter} from 'next/router';

export default function LocaleSwitcher() {
	const router = useRouter();

	if (LOCALES.length < 2) {
		return null;
	}

	const current = router.asPath;

	const setLocale = l => {
		const rest = current.slice(4);
		router.push(`/${l}/${rest}`);
	};

	const isCurrent = lang => current.slice(1, 3) === lang;

	return (
		<>
			{LOCALES.map(l => (
				<Button
					key={l}
					onClick={() => setLocale(l)}
					variant={isCurrent(l) ? 'primary' : 'subtle'}
				>
					{_toUpper(l)}
				</Button>
			))}
		</>
	);
}
