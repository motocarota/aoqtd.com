import {useMemo} from 'react';
import _padStart from 'lodash/padStart';

export function useImageUrl({
	name,
	page,
	chapter,
	language,
}) {
	const url = useMemo(
		// New version with lang included into name
		// () => `${name}-${language}-${_padStart(chapter, 2, 0)}-${_padStart(page, 3, 0)}.webp`,
		// old version without the locale
		() => `${name}-${_padStart(chapter, 2, 0)}_${_padStart(page, 3, 0)}.webp`,
		[
			name,
			page,
			chapter,
			language,
		],
	);
	return url;
}
