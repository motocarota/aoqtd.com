import '@/styles/globals.css';
import Layout from '@/components/Layout';
import '@mantine/core/styles.css';
import {MantineProvider, createTheme} from '@mantine/core';
import React from 'react';

const theme = createTheme({
	/** Put your mantine theme override here */
	primaryColor: 'orange',
});

if (typeof window === 'undefined') {
	React.useLayoutEffect = () => {};
}

export default function App({Component, pageProps}) {
	return (
		<MantineProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</MantineProvider>
	);
}
