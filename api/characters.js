import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export function getAllCharacters({loc}) {
	const charsPath = path.join(process.cwd(), `./public/characters-${loc}.yml`);
	const res = fs.readFileSync(charsPath);
	return yaml.load(res);
}
