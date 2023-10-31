import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {POST_EXTENSION} from '@/app.config';
import getPostUrl from '@/utils/getPostUrl';

const postsDir = locale => path.join(process.cwd(), `_posts/${locale}/`);

export function getPostIds({locale}) {
	return fs.readdirSync(postsDir(locale)).filter(f => f.endsWith(POST_EXTENSION));
}

export function getPostByParams({params = {}, locale}) {
	const id = getPostUrl(params);
	try {
		const postPath = path.join(postsDir(locale), id);
		const fileContents = fs.readFileSync(postPath, 'utf8');
		const {data, content} = matter(fileContents);

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

export function getAllPosts({locale}) {
	const posts = fs.readdirSync(postsDir(locale)).filter(f => f.endsWith(POST_EXTENSION));

	return posts;
}
