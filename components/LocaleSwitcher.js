import {Button, ButtonGroup} from '@mantine/core';
import {LOCALES} from '@/app.config';

export default function LocaleSwitcher() {
	if (LOCALES.length < 2) {
		return null;
	}

	const setLocale = l => {
		console.log('TODO should navigate to another path', l);
	};

	return (
		<ButtonGroup mx='auto'>
			{LOCALES.map(l => (
				<Button
					key={l}
					onClick={() => setLocale(l)}
				>
					{l}
				</Button>
			))}
		</ButtonGroup>
	);
}
