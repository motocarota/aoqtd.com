import _padStart from 'lodash/padStart';

function getValues({chapter, page}) {
	return {
		chapter: _padStart(chapter, 2, '0'),
		page: _padStart(page, 3, '0'),
	};
}

export default getValues;
