import fs from 'fs';
import RSS from 'rss';

export default async function generateRssFeed(posts) {
 const site_url = 'https://www.aoqtd.com';

 const feedOptions = {
  title: 'AOQTD.com | RSS Feed',
  description: 'Another stupid fantasy webcomic!',
  site_url,
  feed_url: `${site_url}/rss.xml`,
  image_url: `${site_url}/aoqtd-logo-sm.webp`,
  pubDate: new Date(),
  copyright: `All rights reserved ${new Date().getFullYear()}, Motocarota`,
 };

 const feed = new RSS(feedOptions);

 posts.map((post) => {
  feed.item({
   title: post,
   description: `<img src="${post}" alt="${post} />"`,
   url: `${site_url}/comic/en/${post}`,
   date: post.date,
  });
 });

 console.log({feed})
 fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}