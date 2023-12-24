import {IMAGE_EXTENSION} from '@/app.config';
import getValues from './getValues';

function getImageUrl(params) {
	const {
		loc,
		page,
		chapter,
	} = getValues(params);

	return `aoqtd-${loc}-${chapter}-${page}${IMAGE_EXTENSION}`;
}

export default getImageUrl;
