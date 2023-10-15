import {IMAGE_EXTENSION} from '@/app.config';
import getValues from './getValues';

function getImageUrl(params) {
	const {
		page,
		chapter,
	} = getValues(params);

	return `aoqtd-${chapter}_${page}${IMAGE_EXTENSION}`;
}

export default getImageUrl;
