import {Accordion, AccordionControl, AccordionItem, AccordionPanel, Anchor, Text, Title} from '@mantine/core';
import Image from 'next/image';
import {useRouter} from 'next/router';

const pageContent = {
	en: {
		title: 'Frequently Asked Questions',
		subtitle: '(from my own mind)',
		faq: [
			{
				q: 'Who are you?',
				a: (
					<>
						<Text>My name is Simone Poggi, alias Motocarota.</Text>
						<Image src='/me.jpeg' alt='me' height='365' width='486' />
						<Text>
							I am a chaotic evil multiclass <Anchor href='https://motocarota.art' target='_blank' rel='noreferrer'>artist</Anchor>/<Anchor href='https://simone-poggi.com' target='_blank' rel='noreferrer'>developer</Anchor>.<br/>
							Born in 1983, I live in Italy with my wife and my two kids and pizza is my favourite food.
						</Text>
					</>
				),
			},
			{
				q: 'Why don\'t you use social networks? having a website is so 2003',
				a: (
					<Text>
						Because social networks <em>suck balls</em>.<br/>
						They are a shithole engineered from the ground up to monetize and harm people and I think the world is better place without them.<br/>
						That&apos;s the reason I ditch them and I warmly encourage you to do the same.<br/>
						(I still have few accounts opened somewhere, but they are all inactive).
					</Text>
				),
			},
			{
				q: 'Why do you publish such an old/ugly/immature story?',
				a: (
					<Text>
						Because I like it.<br/>
						Another one quest to dust is a story I&apos;m working on from more than 20 years and that I&apos;m now fully focused to develop it until I finish it.
					</Text>
				),
			},

			{
				q: 'What is your publish schedule?',
				a: (
					<Text>
						Ideally there will be a new page every thursday. Unless life gets in the way...
					</Text>
				),
			},
			{
				q: 'I have found an error! (haha) how can I submit it?',
				a: (
					<Text>
						<Anchor href='mailto:motocarota@gmail.com'>Just drop me an email</Anchor>, remember to point at the chapter and page.<br/>
						Every kind of help is always super appreciated!
					</Text>
				),
			},
			{
				q: 'How can I support you?',
				a: (
					<Text>
						Read the comic, have fun and then share it with your friends!<br/>
						And if you want to do the extra mile I have an active <Anchor href='https://www.patreon.com/motocarota'>patreon account</Anchor>.
					</Text>
				),
			},
			{
				q: 'My little nephew can drawn much better than you!',
				a: (
					<Text>
						This is not a question and your nephew is dead meat already.
					</Text>
				),
			},
		],
	},
	it: {
		title: 'Domande frequenti',
		subtitle: '(che mi faccio da solo)',
		faq: [
			{
				q: 'Chi sei?',
				a: (
					<>
						<Text>Il mio nome e&apos; Simone Poggi, alias Motocarota.</Text>
						<Image src='/me.jpeg' alt='me' height='365' width='486' />
						<Text>
							Sono un multiclasse <Anchor href='https://motocarota.art' target='_blank' rel='noreferrer'>artista</Anchor>/<Anchor href='https://simone-poggi.com' target='_blank' rel='noreferrer'>programmatore</Anchor> caotico malvagio.<br/>
							Classe &apos;83, sono sposato con due figli, vivo in provincia di Genova, il mio cibo preferito e&apos; la pizza, e direi che arrivati a questo punto non c&apos;e&apos; piu&apos; assolutamente niente altro da dire.
						</Text>
					</>
				),
			},
			{
				q: 'Perche\' non pubblichi il fumetto sui social come fanno tutti?',
				a: (<Text>
						Perche&apos; mi stanno fortemente sulle palle.<br/>
						Hanno conclamati effetti negativi sulla salute mentale delle persone e credo che il mondo sia un posto migliore senza di loro.<br/>
						E&apos; per questo che li ho abbandonati e ti invito caldamente a fare altrettanto.
				</Text>),
			},
			{
				q: 'Perche\' pubblichi roba cosi\' vecchia, brutta e imbarazzante?',
				a: (
					<Text>
						Perche&apos; alla fine a me piace. E&apos; una serie a cui lavoro da piu&apos; di 20 anni e che intendo a portare a termine.<br/>
					</Text>
				),
			},

			{
				q: 'Ogni quanto pubblichi le nuove pagine?',
				a: (
					<Text>
					Idealmente il ritmo e&apos; di una pagina a settimana, salvo inconvenienti.
					</Text>
				),
			},
			{
				q: 'Ho trovato un errore (haha)! dove posso segnalarlo?',
				a: (
					<Text>
					Basta una mail a <Anchor href='mailto:motocarota@gmail.com'>motocarota[at]gmail.com</Anchor>. Ogni segnalazione e&apos; sempre la benvenuta.
					</Text>
				),
			},
			{
				q: 'Come posso supportarti?',
				a: (
					<Text>
						Leggi il fumetto, diverititi e condividilo con i tuoi amici, spargi la voce.<br/>
						Poi se proprio vuoi esagerare al momento ho un <Anchor href='https://www.patreon.com/motocarota'>canale patreon</Anchor> attivo.
					</Text>
				),
			},
			{
				q: 'Il mio nipotino disegna meglio di te!',
				a: (
					<Text>Sappi che tuo nipote e&apos; un uomo morto. E comunque questa non e&apos; una domanda.</Text>
				),
			},
		],
	},
};

export default function FAQ() {
	const {locale} = useRouter();
	const t = pageContent[locale];

	return (
		<>
			<Title>
				{t.title}
			</Title>
			<Title order={5} mb='lg'>{t.subtitle}</Title>
			<Accordion maw='900' m='auto' variant='contained'>
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
		</>
	);
}
