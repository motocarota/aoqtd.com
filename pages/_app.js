import '@/styles/globals.css';
import Layout from '@/components/Layout';
import '@mantine/core/styles.css';
import {MantineProvider, createTheme} from '@mantine/core';
import {I18nProvider} from '@/Provider/I18n.provider';

const theme = createTheme({
	/** Put your mantine theme override here */
	primaryColor: 'orange',
});

export default function App({Component, pageProps}) {
	return (
		<MantineProvider theme={theme}>
			<I18nProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</I18nProvider>
		</MantineProvider>
	);
}
