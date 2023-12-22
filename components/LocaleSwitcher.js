import {I18nContext} from '@/Provider/I18n.provider';
import {Button, ButtonGroup} from '@mantine/core';
import {useContext} from 'react';

export default function LocaleSwitcher() {
	const {locale, setLocale, locales} = useContext(I18nContext);
	if (locales.length < 2) {
		return null;
	}

	return (
		<ButtonGroup mx='auto'>
			{locales.map(l => (
				<Button
					key={l}
					variant={locale === l ? 'outline' : 'subtle'}
					onClick={() => setLocale(l)}
				>
					{l}
				</Button>
			))}
		</ButtonGroup>
	);
}
