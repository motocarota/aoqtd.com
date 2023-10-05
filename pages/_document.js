import {Html, Head, Main, NextScript} from 'next/document';
import {ColorSchemeScript} from '@mantine/core';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<ColorSchemeScript />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
