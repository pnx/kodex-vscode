import * as fs from 'fs'
import * as path from 'path'
import theme_default from './theme_default'
import template from './template'

const filePath = (name: string) : string =>
	path.join(process.cwd(), `/themes/${name}.json`)

const generate = (name: string, filename: string, scheme: any) => {
	const path = filePath(filename)
	const content = JSON.stringify(template(name, scheme), null, 4)
	fs.writeFileSync(path, content)
	console.log(`Generated ${name}!`)
}

generate('Kodex', 'Kodex-color-theme', theme_default)