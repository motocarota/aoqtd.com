import fs from 'fs';
import path from 'path';
import {IMAGE_EXTENSION} from '@/app.config';

const comicDir = path.join(process.cwd(), './public/comic/it/');

export function getAllPages() {
	return fs.readdirSync(comicDir).filter(f => f.endsWith(IMAGE_EXTENSION));
}
