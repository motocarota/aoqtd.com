import {POST_EXTENSION} from '@/app.config';
import getValues from './getValues';

// `post-${params.chapter}-${params.page}.md`;
function getPostUrl(params) {
	const {
		page,
		chapter,
	} = getValues(params);

	return `post-${chapter}_${page}${POST_EXTENSION}`;
}

export default getPostUrl;
