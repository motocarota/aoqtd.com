import extractValues from './extractValues';

function getPageLink({pages, index, locale}) {
	if (!pages[index]) {
		return '';
	}

	const p = extractValues(pages[index]);

	return `/${locale}/${p?.chapter}/${p?.page}`;
}

export default getPageLink;
