import _get from 'lodash/get';
import {createContext, useState} from 'react';
import dict from '../hooks/Locales';

const DEFAULT_LANG = 'it';

export const I18nContext = createContext({
	locales: Object.keys(dict),
	locale: DEFAULT_LANG,
	setLocale() {},
	t: id => id,
});

export function I18nProvider({children}) {
	const [locale, setLocale] = useState(DEFAULT_LANG);

	return <I18nContext.Provider value={{
		locales: Object.keys(dict),
		locale,
		setLocale,
		t: id => _get(dict, [locale, id], id),
	}}>{children}</I18nContext.Provider>;
}
