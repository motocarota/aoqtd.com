import _toUpper from 'lodash/toUpper';
import {Button, ButtonGroup} from '@mantine/core';
import {LOCALES} from '@/app.config';

export default function LocaleSwitcher({locale, setLocale}) {
	if (LOCALES.length < 2) {
		return null;
	}

	return (
		<ButtonGroup mx='auto' my='md'>
			{LOCALES.map(l => (
				<Button
					key={l}
					onClick={() => setLocale(l)}
					variant={locale === l ? 'outline' : 'subtle'}
				>
					{_toUpper(l)}
				</Button>
			))}
		</ButtonGroup>
	);
}
