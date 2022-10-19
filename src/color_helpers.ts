import chroma from 'chroma-js'

export const ContrastColor = (color, light, dark) =>
	chroma.contrast(light, color) > 4.5 ? light : dark;

