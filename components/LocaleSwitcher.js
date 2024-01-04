import {Menu, UnstyledButton} from '@mantine/core';
import {LOCALES} from '@/app.config';
import {useRouter} from 'next/router';
import Image from 'next/image';

const LANGMAP = {
	it: 'Italiano',
	en: 'English',
};

export default function LocaleSwitcher() {
	const router = useRouter();

	if (LOCALES.length < 2) {
		return null;
	}

	const path = router.asPath;

	const setLocale = l => {
		const rest = path.slice(4);
		router.push(`/${l}/${rest}`);
	};

	const current = path.slice(1, 3);

	return (
		<UnstyledButton>
			<Menu shadow='md' width={200} trigger='hover' openDelay={100} closeDelay={400}>
				<Menu.Target>
					<Image src={`/${current}.webp`} alt={current} width={30} height={20}/>
				</Menu.Target>

				<Menu.Dropdown>
					{LOCALES.map(l => (
						<Menu.Item
							key={l}
							onClick={() => setLocale(l)}
							rightSection={<Image src={`/${l}.webp`} alt={l} width={30} height={20}/>}>
							{LANGMAP[l] ?? l}
						</Menu.Item>
					))}
				</Menu.Dropdown>
			</Menu>
		</UnstyledButton>
	);
}
