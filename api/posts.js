import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {POST_EXTENSION} from '@/app.config';
import getPostUrl from '@/utils/getPostUrl';

const postsDir = loc => path.join(process.cwd(), `public/posts/${loc}/`);

export function getPostIds({loc}) {
	return fs.readdirSync(postsDir(loc)).filter(f => f.endsWith(POST_EXTENSION));
}

export function getPostByParams({params = {}}) {
	const id = getPostUrl(params);
	console.log({id});
	try {
		const postPath = path.join(postsDir(params.loc), id);
		console.log({postPath});
		const fileContents = fs.readFileSync(postPath, 'utf8');
		console.log(fileContents);
		const {data, content} = matter(fileContents);
		console.log({data, content});

		return {
			data,
			content,
		};
	// eslint-disable-next-line no-unused-vars
	} catch (err) {
		return {
			data: null,
			content: null,
		};
	}
}

export function getAllPosts({loc}) {
	const posts = fs.readdirSync(postsDir(loc)).filter(f => f.endsWith(POST_EXTENSION));

	return posts;
}
