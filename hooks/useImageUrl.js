import {useMemo} from 'react';
import _padStart from 'lodash/padStart';

export function useImageUrl({
	name,
	page,
	chapter,
	locale,
}) {
	const url = useMemo(
		() => `${name}-${locale}-${_padStart(chapter, 2, 0)}-${_padStart(page, 3, 0)}.webp`,
		[
			name,
			page,
			chapter,
			locale,
		],
	);
	return url;
}
