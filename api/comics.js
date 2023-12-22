import fs from 'fs';
import path from 'path';
import {IMAGE_EXTENSION} from '@/app.config';

export function getAllPages() {
	const comicDir = path.join(process.cwd(), './public/comic/it');
	return fs.readdirSync(comicDir).filter(f => f.endsWith(IMAGE_EXTENSION));
}
