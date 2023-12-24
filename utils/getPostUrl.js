import {POST_EXTENSION} from '@/app.config';
import getValues from './getValues';

// `post-${params.chapter}-${params.page}.md`;
function getPostUrl(params) {
	const {
		loc,
		page,
		chapter,
	} = getValues(params);

	return `post-${loc}-${chapter}-${page}${POST_EXTENSION}`;
}

export default getPostUrl;
