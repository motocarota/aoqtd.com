const en = require('./en.json');
const it = require('./it.json');

const i18n = {
	translations: {
		en,
		it,
	},
	defaultLang: 'en',
	useBrowserDefault: true,
	// Optional property, will default to "query" if not set
	languageDataStore: 'query', //  || 'localStorage',
};

module.exports = i18n;
