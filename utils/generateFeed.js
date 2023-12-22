/* eslint-disable camelcase */
import fs from 'fs';
import RSS from 'rss';
import getPageLink from './getPageLink';
import extractValues from './extractValues';

// Const site_url = 'http://localhost:3000';
const site_url = 'https://www.aoqtd.com';

function getPostName(post) {
	const {
		chapter, page,
	} = extractValues(post);
	return `Chapter ${chapter}, Page ${page}`;
}

export default async function generateRssFeed({posts}) {
	const feedOptions = {
		title: 'Another One Quest To Dust | AOQTD.com',
		description: 'Another stupid fantasy webcomic! enjoy!',
		site_url,
		feed_url: `${site_url}/rss.xml`,
		image_url: `${site_url}/aoqtd-logo-sm.webp`,
		pubDate: new Date(),
		copyright: `All rights reserved ${new Date().getFullYear()}, Motocarota`,
	};

	const feed = new RSS(feedOptions);

	posts.map(post => feed.item({
		title: getPostName(post),
		description: `<img src="${site_url}/comic/it/${post}" alt="${post} />"`,
		url: getPageLink({pages: [post], index: 0}),
		date: post.date,
	}));

	fs.writeFileSync('./public/rss.xml', feed.xml({indent: true}));
}
