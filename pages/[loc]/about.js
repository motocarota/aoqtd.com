import {Accordion, AccordionControl, AccordionItem, AccordionPanel, Stack, Title} from '@mantine/core';
import {LOCALES} from '@/app.config';
import {pageContent} from '@/i18n/about.content';

export default function About({loc}) {
	const t = pageContent[loc];

	return (
		<Stack>
			<Title>
				{t.title}
			</Title>
			<Title order={5} mb='lg'>{t.subtitle}</Title>
			<Accordion maw='880' m='auto' variant='contained'>
				{t.faq.map((f, index) => (
					<AccordionItem value={`${index}`} key={index}>
						<AccordionControl>
							<Title order={4}>
								{f.q}
							</Title>
						</AccordionControl>
						<AccordionPanel>
							{f.a}
						</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>
		</Stack>
	);
}

export async function getStaticProps({params}) {
	const {loc} = params;
	return {
		props: {loc},
	};
}

export function getStaticPaths() {
	return {
		paths: LOCALES.map(l => `/${l}/about`),
		fallback: false,
	};
}
