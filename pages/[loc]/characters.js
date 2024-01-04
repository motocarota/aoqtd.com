import {getAllCharacters} from '@/api/characters';
import {LOCALES} from '@/app.config';
import CharacterSheet from '@/components/CharacterSheet';
import {Stack} from '@mantine/core';

export default function Characters({chars = []}) {
	return (
		<Stack maw={880} mx='auto'>
			{chars.map(
				c => <CharacterSheet key={c.id} char={c} />,
			)}
		</Stack>
	);
}

export function getStaticProps({params}) {
	const {loc} = params;
	const chars = getAllCharacters({loc});
	return {
		props: {
			chars,
		},
	};
}

export function getStaticPaths() {
	return {
		paths: LOCALES.map(l => `/${l}/characters`),
		fallback: false,
	};
}
