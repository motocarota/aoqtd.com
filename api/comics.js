import fs from 'fs';
import path from 'path';
import {IMAGE_EXTENSION} from '@/app.config';

export function getAllPages({loc = 'it'}) {
	const comicDir = path.join(process.cwd(), `./public/comic/${loc}/`);
	return fs.readdirSync(comicDir).filter(f => f.endsWith(IMAGE_EXTENSION));
}
