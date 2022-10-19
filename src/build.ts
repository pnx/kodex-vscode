import config from '../package.json'
import * as fs from 'fs'
import * as path from 'path'
import themes from './themes'
import template from './template'

const generate = (name: string, filename: string, theme: any) => {
	const file = path.normalize(path.join(process.cwd(), filename))
	const content = JSON.stringify(template(name, theme), null, 4)
	fs.writeFileSync(file, content)
	console.log(`Generated ${name}!`)
}

config.contributes.themes.forEach(item => {
    generate(item.label, item.path, themes[item.theme])
});
