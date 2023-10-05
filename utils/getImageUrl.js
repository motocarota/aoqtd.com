import {IMAGE_EXTENSION} from '@/app.config';
import pad2 from './pad2';

function getImageUrl({chapter, page}) {
	return `aoqtd-${pad2(chapter)}-${pad2(page)}${IMAGE_EXTENSION}`;
}

export default getImageUrl;
