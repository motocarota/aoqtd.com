import {Accordion, AccordionControl, AccordionItem, AccordionPanel, Anchor, Text, Title} from '@mantine/core';
import Image from 'next/image';

export default function FAQ() {
	return (
		<>
			<Title>
        Frequently Asked Questions
			</Title>
			<Title order={5}>Ovvero: io che mi faccio domande e mi rispondo da solo come un pazzo</Title>
			<Accordion maw='900' m='auto' variant='contained'>
				<AccordionItem value='1'>
					<AccordionControl>
						<Title order={5}>
							Chi sei?
						</Title>
					</AccordionControl>
					<AccordionPanel>
						<Text>Il mio nome e&apos; Simone Poggi, alias Motocarota.</Text>
						<Image src='/me.jpeg' alt='me' height='365' width='486' />
						<Text>
							Sono un multiclasse <Anchor href='https://motocarota.art' target='_blank' rel='noreferrer'>artista</Anchor>/<Anchor href='https://simone-poggi.com' target='_blank' rel='noreferrer'>programmatore</Anchor> caotico malvagio.<br/>
							Classe &apos;83, sono sposato con due figli, vivo in provincia di Genova, il mio cibo preferito e&apos; la pizza, e direi che arrivati a questo putno non c&apos;e&apos; piu&apos; assolutamente niente altro da dire.
						</Text>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem value='2'>
					<AccordionControl>
						<Title order={4}>
							Perche&apos; non pubblichi sui social come tutti?
						</Title>
					</AccordionControl>
					<AccordionPanel>
						<Text>
							Perche&apos; mi stanno fortemente sulle palle.<br/>
							Proprio come tutti li reputo un posto di merda, con effetti negativi sulla salute mentale delle persone.<br/>
							Ho ancora qualche account aperto ma uno ad uno li ho tutti abbandonati.
						</Text>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem value='3'>
					<AccordionControl>
						<Title order={4}>
							Perche&apos; pubblichi roba cosi&apos; vecchia? e&apos; imbarazzante!
						</Title>
					</AccordionControl>
					<AccordionPanel>
						<Text>
							Perche&apos; a me piace. E&apos; una serie a cui lavoro da piu&apos; di 20 anni.<br/>
							Anche se i primi disegni sono brutti, la narrazione confusa, la storia fa pena, ecc ecc a me tutto sommato queste storie piacciono, quindi perche&apos; no?<br/>
						</Text>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem value='4'>
					<AccordionControl>
						<Title order={4}>
							Ogni quanto pubblichi le nuove pagine?
						</Title>
					</AccordionControl>
					<AccordionPanel>
						<Text>
							Idealmente il ritmo e&apos; di una pagina a settimana, salvo inconvenienti.
						</Text>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem value='5'>
					<AccordionControl>
						<Title order={4}>
							Ho trovato un errore! dove posso segnalarlo? (haha)
						</Title>
					</AccordionControl>
					<AccordionPanel>
						<Text>
							Basta una mail a <Anchor href='mailto:motocarota@gmail.com'>motocarota[at]gmail.com</Anchor>. Ogni segnalazione e&apos; sempre la benvenuta.
						</Text>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem value='6'>
					<AccordionControl>
						<Title order={4}>
							Hai un patreon?
						</Title>
					</AccordionControl>
					<AccordionPanel>
						<Text><Anchor href='https://www.patreon.com/motocarota'>Affermativo</Anchor>.</Text>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem value='6'>
					<AccordionControl>
						<Title order={5}>
							Mio cuggino disegna meglio di te!
						</Title>
					</AccordionControl>
					<AccordionPanel>
						<Text>Sappi che tuo cuggino e&apos; un uomo morto. E comunque questa non e&apos; una domanda.</Text>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
}
