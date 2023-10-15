import {IMAGE_EXTENSION} from '@/app.config';
import _padStart from 'lodash/padStart';

function getImageUrl({chapter, page}) {
	return `aoqtd-${_padStart(chapter, 2, '0')}_${_padStart(page, 3, '0')}${IMAGE_EXTENSION}`;
}

export default getImageUrl;
