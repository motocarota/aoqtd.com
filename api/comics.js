import fs from 'fs';
import path from 'path';
import {IMAGE_EXTENSION} from '@/app.config';

export function getAllPages({locale}) {
	const comicDir = path.join(process.cwd(), `./public/comic/${locale}/`);
	return fs.readdirSync(comicDir).filter(f => f.endsWith(IMAGE_EXTENSION));
}
