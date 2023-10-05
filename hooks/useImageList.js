import {
	useCallback, useMemo, useState,
} from 'react';

const useImageList = ({pages}) => {
	const [page, setPage] = useState(0);

	const first = useCallback(
		() => {
			setPage(0);
		},
		[],
	);

	const last = useCallback(
		() => {
			setPage(pages.length - 1);
		},
		[pages],
	);

	const next = useCallback(
		() => {
			if (page >= pages.length - 1) {
				return;
			}

			setPage(page + 1);
		},
		[pages, page],
	);

	const prev = useCallback(
		() => {
			if (page <= 0) {
				return;
			}

			setPage(page - 1);
		},
		[page],
	);

	// Current page src attribute
	const pageSrc = useMemo(
		() => pages[page],
		[pages, page],
	);
	const onFirstPage = page <= 0;
	const onLastPage = page >= pages.length - 1;

	return {
		page,
		first,
		last,
		next,
		prev,
		pageSrc,
		onFirstPage,
		onLastPage,
	};
};

export default useImageList;
