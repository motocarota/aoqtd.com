
// Expected name format:
// {something}-{chapter}-{page}.{extension}
// ex. aoqtd-12-34.png, coolcomic-2345678-876543.webp
function extractValues(fileName) {
	if (!fileName) {
		return null;
	}

	// Remove extension
	const [name] = fileName.split('.');
	// Reads chapter and name from filename format
	const [, chapter = '', page = ''] = name.split('-');

	return {
		page,
		chapter,
	};
}

export default extractValues;
