
// Expected name format:
// {something}-{locale}-{chapter}-{page}.{extension}

import getValues from './getValues';

// Ex. aoqtd-12_034.png, coolcomic-2345678_876543.webp
function extractValues(fileName) {
	if (!fileName) {
		return null;
	}

	// Remove extension
	const [name] = fileName.split('.');
	// Reads chapter and name from filename format
	const [, loc, chapter = '', page = ''] = name.split('-');

	return getValues({
		loc,
		page,
		chapter,
	});
}

export default extractValues;
