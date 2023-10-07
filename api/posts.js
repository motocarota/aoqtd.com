import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {POST_EXTENSION} from '@/app.config';

const postsDir = path.join(process.cwd(), '_posts/it/');

export function getPostIds() {
	return fs.readdirSync(postsDir).filter(f => f.endsWith(POST_EXTENSION));
}

export function getPostById(id) {
	try {
		const postPath = path.join(postsDir, `${id}${POST_EXTENSION}`);
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

export function getAllPosts() {
	const posts = fs.readdirSync(postsDir).filter(f => f.endsWith(POST_EXTENSION));

	return posts;
}
