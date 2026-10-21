export type Link = {
	name: string;
	desc: string;
	url: string;
	img: string;
	tags?: string[];
};

export const games: Link[] = [
	{
		name: 'Noita',
		desc: "This game is incredible. When you kill the last boss, you realize you actually just completed the tutorial. In order to complete it, you have to break the game, literally. Also I hope you don't mind dying",
		url: 'https://noitagame.com',
		img: 'https://killsixbilliondemons.com/wp-content/uploads/2013/04/ksbdcoverchapter1.jpg',
		tags: ['rougelike', 'simulation', 'magic system', 'insane']
	}
	// TODO add more
];
export const movies: Link[] = []; // TODO
export const books: Link[] = []; // TODO
export const youtubeChannels: Link[] = [
	{
		name: 'Odd Artworks',
		desc: 'MAN how much I love the way this guy slowly draws these crazy dungeons filled with tiny monsters and stuff.',
		url: 'https://www.youtube.com/@oddartworks',
		img: 'https://yt3.googleusercontent.com/JjKjK9k0od-gwL37cStyRFqjW8Jv6vPieeVm-FExqx8hRf0gdtp3V_7tRMmpOr_2GuZwpa4z=s160-c-k-c0x00ffffff-no-rj',
		tags: ['art', 'dungeons and dragons', 'illustration', 'cozy', 'black and white']
	},
	{
		name: 'Writing for Screens',
		desc: 'Some fundamental screenwriting principles: stuff you REALLY NEED TO KNOW. The life-savers, the essential tools and ideas beneath every kind of script in any genre or medium.',
		url: 'https://www.youtube.com/@writingforscreens',
		img: 'https://yt3.googleusercontent.com/ytc/AIdro_kn9bvImM9-7pR-XvEwqicxRZjuHNb93cpyKGlmaDYyARs=s160-c-k-c0x00ffffff-no-rj',
		tags: ['screenwriting', 'plot', 'devices', 'hints', 'process']
	}
	// TODO add more
];
export const comics: Link[] = [
	{
		name: 'Ultramega - James Harren',
		desc: 'Awesome drawings, monsters, huge monsters, epic fights, uncertainty, blood, lasers, mind blowing powers. Nothing is missing from this saga, and I love it.',
		url: 'https://imagecomics.com/comics/series/ultramega',
		img: 'https://cdn.imagecomics.com/assets/i/series/606920/ultramega_d8bebeef37.jpg',
		tags: ['action', 'drama', 'huge monsters', 'struggle']
	},
	{
		name: 'The Goon - Eric Powell',
		desc: 'Take three apparently incompatible genres, mix them together and add some dark grotesque humour, and you get this gem. brilliant',
		url: 'https://www.thegoon.com/albatross.html',
		img: 'https://www.thegoon.com/images/goon.jpg?crc=3870768723',
		tags: ['comedy', 'drama', 'action', 'gangster', 'zombies']
	},
	{
		name: 'Blast - Larcenet',
		desc: 'This man is clearly a monster from another dimension and here you can visit his own abyss in the most pure form. amazing book.',
		url: 'https://www.dargaud.com/bd/blast/blast-integrale/blast-integrale-blast-integrale-complete-bda5166030',
		img: 'https://bdi.dlpdomain.com/album/9782205076813/couv/M650x842/blast-integrale.jpg',
		tags: ['psychological', 'dark', 'NSFW', 'introspection', 'violence']
	}
];
export const webcomics: Link[] = [
	{
		name: 'Kill Six Billion Demons',
		desc: 'Probably the best free webcomic you can find at the moment: an epic story about a young barmaid thrown into a cosmic war between gods, angels and demons.',
		url: 'https://killsixbilliondemons.com',
		img: 'https://killsixbilliondemons.com/wp-content/uploads/2013/04/ksbdcoverchapter1.jpg',
		tags: ['demigods', 'angels', 'demons', 'heaven', 'slightly NSFW', 'gore']
	},
	{
		name: 'The Weekly Roll',
		desc: 'A four-panel comic strip that follows the exploits of a party of adventurers as they walk the fine line between being the good guys and homeless psychopaths for hire.',
		url: 'https://www.webtoons.com/en/canvas/the-weekly-roll/list?title_no=358889',
		img: 'https://storage.ghost.io/c/70/6e/706e22fc-ee33-498e-a2ae-5662f9f0cc4a/content/images/thumbnail/thumbnail-2.jpg'
	},
	{
		name: 'Ten Earth Shattering Blows',
		desc: '',
		url: 'https://tenearthshatteringblows.com/',
		img: 'https://storage.ghost.io/c/70/6e/706e22fc-ee33-498e-a2ae-5662f9f0cc4a/content/images/thumbnail/5x36-1-725x1024.jpg'
	},
	{
		name: 'War and Peas',
		desc: 'A never-ending webcomic of woefully funny stories that will leave you cry-laughing or just crying.',
		url: 'https://warandpeas.com/',
		img: 'https://storage.ghost.io/c/70/6e/706e22fc-ee33-498e-a2ae-5662f9f0cc4a/content/images/thumbnail/war-and-peas-witch-dancing-in-the-moonlight.jpg'
	},
	{
		name: 'Safely Endangered',
		desc: 'An absurd webcomic where things rarely work out. By Zach Cranor.',
		url: 'https://safelyendangered.com/',
		img: 'https://storage.ghost.io/c/70/6e/706e22fc-ee33-498e-a2ae-5662f9f0cc4a/content/images/thumbnail/banner-bird2.png'
	},
	{
		name: 'The Perry Bible Fellowship',
		desc: "I have no words to describe this guy. just go and read it. No seriously go to read that stuff, it's incredible",
		url: 'https://pbfcomics.com/',
		img: 'https://pbfcomics.com/wp-content/themes/PBF/images/logo.png'
	},
	{
		name: 'The Middle Age',
		desc: 'A fantasy webcomic by Steve Conley.',
		url: 'https://steveconley.com/the-middle-age/',
		img: 'https://storage.ghost.io/c/70/6e/706e22fc-ee33-498e-a2ae-5662f9f0cc4a/content/images/thumbnail/tma-cast-w-awards-900x.jpg'
	},
	{
		name: 'Crow Time',
		desc: 'Short silly comics about a shameless murder of crows and the other creatures lucky enough to roam the nearby lands.',
		url: 'https://www.webtoons.com/en/canvas/crow-time/list?title_no=693372&webtoon-platform-redirect=true',
		img: 'https://storage.ghost.io/c/70/6e/706e22fc-ee33-498e-a2ae-5662f9f0cc4a/content/images/thumbnail/thumbnail.jpg'
	},
	{
		name: "Sarah's Scribbles",
		desc: 'This is my life. Updated every Saturday and Wednesday.',
		url: 'https://www.webtoons.com/en/canvas/sarahs-scribbles/list?title_no=677113&webtoon-platform-redirect=true',
		img: 'https://storage.ghost.io/c/70/6e/706e22fc-ee33-498e-a2ae-5662f9f0cc4a/content/images/thumbnail/thumbnail-1.jpg'
	},
	{
		name: 'Last Place Comics',
		desc: 'An absurd webcomic where things rarely work out. By Zach Cranor.',
		url: 'https://lastplacecomics.com/',
		img: 'https://storage.ghost.io/c/70/6e/706e22fc-ee33-498e-a2ae-5662f9f0cc4a/content/images/thumbnail/SEO-icon.jpg'
	},
	{
		name: 'Saturday Morning Breakfast Cereal',
		desc: '',
		url: 'https://www.smbc-comics.com/',
		img: 'https://storage.ghost.io/c/70/6e/706e22fc-ee33-498e-a2ae-5662f9f0cc4a/content/images/thumbnail/1743348482-20250330.png'
	},
	{
		name: 'The Noob Comic',
		desc: 'Adventures in Clichequest of the mighty Oforfsake. read it or eat permaban, n00b!',
		url: 'http://thenoobcomic.com/',
		img: 'https://thenoobcomic.com/wp-content/themes/eddiemachado-bones-9db85e4/library/images/logolarge.png'
	},
	{
		name: 'Pepper & Carrot',
		desc: 'A free and open webcomic about a young witch named Pepper and her cat Carrot, living in a fantasy world of potions, magic and monsters. Cozy as fuck.',
		url: 'https://www.peppercarrot.com/',
		img: 'https://storage.ghost.io/c/70/6e/706e22fc-ee33-498e-a2ae-5662f9f0cc4a/content/images/thumbnail/2016-11-14_vertical-cover-book-two_screen_by-David-Revoy.jpg'
	},
	{
		name: 'The Order of the Stick',
		desc: 'A classic',
		url: 'https://www.giantitp.com/comics/oots.html',
		img: 'https://storage.ghost.io/c/70/6e/706e22fc-ee33-498e-a2ae-5662f9f0cc4a/content/images/thumbnail/Top_GITP.gif'
	},
	{
		name: 'XKCD',
		desc: 'No need for presentations I guess...',
		url: 'https://xkcd.com/',
		img: 'https://storage.ghost.io/c/70/6e/706e22fc-ee33-498e-a2ae-5662f9f0cc4a/content/images/thumbnail/humidifier_review_2x.png'
	}
];

export const data = {
	youtubeChannels,
	webcomics,
	comics,
	movies,
	games,
	books
};
