import {Accordion, AccordionControl, AccordionItem, AccordionPanel, Text, Title} from '@mantine/core';
import Image from 'next/image';

export default function FAQ() {
	return (
		<>
			<Title>
        Frequently Asked Questions
			</Title>
			<Title order={5}>Ovvero: io che mi faccio domande e mi rispondo da solo come un pazzo</Title>
			<Accordion maw='900' m='auto'>
				<AccordionItem value='1'>
					<AccordionControl>
						Chi sei?
					</AccordionControl>
					<AccordionPanel>
						<Text>Il mio nome e&apos; Simone Poggi, alias Motocarota.</Text>
						<Image src='/me.jpeg' alt='me' height='365' width='486' />
						<Text>Sono un multiclasse <a href='https://motocarota.art' target='_blank' rel='noreferrer'>artista</a>/<a href='https://simone-poggi.com' target='_blank' rel='noreferrer'>programmatore</a> caotico malvagio.</Text>
						<Text>Ho vent&apos;anni per gamba, sono sposato con due figli, vivo in provincia di Genova, il mio piatto preferito e&apos; la pizza e una volta ho toccato una rana morta.</Text>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem value='2'>
					<AccordionControl>
						Perche&apos; non pubblichi sui social come tutti?
					</AccordionControl>
					<AccordionPanel>
						<Text>Perche&apos; mi stanno fortemente sui coglioni. Proprio come tutti li reputo un posto di merda, ma a differenza poi pero&apos; non ci vado davvero.</Text>
						<Text>Ho qualche account ma sono tutti abbandonati, non sono pagato abbastanza per seguire i capricci del santo algoritmo.</Text>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem value='3'>
					<AccordionControl>
						Perche&apos; pubblichi roba cosi&apos; vecchia? e&apos; imbarazzante!
					</AccordionControl>
					<AccordionPanel>
						<Text>Perche&apos; e&apos; una serie a cui lavoro da piu&apos; di 20 anni.</Text>
						<Text>Anche se i primi disegni sono brutti, la narrazione confusa, la storia fa pena, ecc ecc a me nonostante tutto queste storie piacciono, quindi perche&apos; no?</Text>
						<Text>Non si tratta di un lavoro ne&apos; ho la mira di farcelo diventare, io ho gia&apos; un lavoro e sto bene dove sto, tutto quello che pubblico qui e&apos; solo per hobby.</Text>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem value='4'>
					<AccordionControl>
							Ogni quanto pubblichi le nuove pagine?
					</AccordionControl>
					<AccordionPanel>
						<Text>Idealmente il ritmo e&apos; di una pagina a settimana, salvo inconvenienti.</Text>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem value='5'>
					<AccordionControl>
							Ho trovato un errore! (haha) dove posso segnalarlo?
					</AccordionControl>
					<AccordionPanel>
						<Text>Basta una mail a <a href='mailto:motocarota@gmail.com'>motocarota[at]gmail.com</a>. Ogni segnalazione e&apos; sempre la benvenuta.</Text>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem value='6'>
					<AccordionControl>
							Hai un patreon?
					</AccordionControl>
					<AccordionPanel>
						<Text><a href='https://www.patreon.com/motocarota'>Affermativo</a>.</Text>
					</AccordionPanel>
				</AccordionItem>
				<AccordionItem value='6'>
					<AccordionControl>
							Mio cuggino disegna meglio di te!
					</AccordionControl>
					<AccordionPanel>
						<Text>Sappi che tuo cuggino e&apos; un uomo morto. E comunque questa non e&apos; una domanda.</Text>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
}
