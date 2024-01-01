import {Box} from '@mantine/core';

export default function Post({md}) {
	if (!md) {
		return null;
	}

	return (
		<Box maw='700' mx='auto' my='md' style={{
			background: '#fafafa',
			padding: '1rem',
			borderRadius: '1rem',
			listStylePosition: 'inside',
		}}>
			<div dangerouslySetInnerHTML={{__html: md}} />
		</Box>
	);
}
