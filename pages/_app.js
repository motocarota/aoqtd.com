import '@/styles/globals.css';
import Layout from '@/components/Layout';
import '@mantine/core/styles.css';
import {MantineProvider, createTheme} from '@mantine/core';

const theme = createTheme({
	/** Put your mantine theme override here */
	primaryColor: 'orange',
});

export default function App({Component, pageProps}) {
	return (
		<Layout>
			<MantineProvider theme={theme}>
				<Component {...pageProps} />
			</MantineProvider>
		</Layout>
	);
}
