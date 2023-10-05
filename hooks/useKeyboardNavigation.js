import {useEffect} from 'react';

const useKeyboardNavigation = ({next, prev}) => {
	// Keyboard navigation
	useEffect(() => {
		const keyUpManager = ev => {
			switch (ev.key) {
				case 'ArrowLeft': {
					return prev();
				}

				case 'ArrowRight': {
					return next();
				}

				default: {
					return null;
				}
			}
		};

		document.addEventListener('keyup', keyUpManager);

		// Clean up
		return () => {
			document.removeEventListener('keyup', keyUpManager);
		};
	}, [next, prev]);
};

export default useKeyboardNavigation;
