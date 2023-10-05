import path from 'path';
import fs from 'fs';
import {IMAGE_EXTENSION} from '@/app.config';

function readAllPages() {
	const pagesDir = path.join(process.cwd(), './public/comic/it/');
	const pages = fs.readdirSync(pagesDir).filter(f => f.endsWith(IMAGE_EXTENSION));

	return pages;
}

export default readAllPages;
