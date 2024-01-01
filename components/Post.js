import {Box} from '@mantine/core';

export default function Post({md}) {
	if (!md) {
		return null;
	}

	return (
		<Box maw='700' m='auto' style={{
			background: '#fafafa',
			padding: '1rem',
			margin: '1rem',
			borderRadius: '1rem',
		}}>
			<div dangerouslySetInnerHTML={{__html: md}} />
		</Box>
	);
}
