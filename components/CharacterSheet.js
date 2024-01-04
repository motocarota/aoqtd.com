import {Badge, Group, Space, Stack, Text, Title} from '@mantine/core';
import Image from 'next/image';

const CharacterSheet = ({char}) => (
	<Stack ta='center'>
		<Group mx='auto'>
			<Image
				style={{borderRadius: 150}}
				width={150}
				height={150}
				alt={char.id}
				src={`/${char.id}.webp`}
			/>
			<Stack w={300}>
				<Title>{char.name}</Title>
				<Title order={3}>{char.title}</Title>
				<Text>{char.race} {char.class}</Text>
				<Badge mx='auto' bg='lightgrey'>{char.alignment}</Badge>
			</Stack>
		</Group>
		<Text size='sm' c='dimmed'>{char.desc}</Text>
		<Space py='md' />
	</Stack>
);

export default CharacterSheet;
