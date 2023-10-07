import {Box} from '@mantine/core';

export default function Post({md}) {
	return (
		<Box maw='700' m='auto'>
			<div dangerouslySetInnerHTML={{__html: md}} />
		</Box>
	);
}
