import chroma from 'chroma-js'

const colors = {
    // Basic colors
    Black: "#000",
    Gray: "#404754",
    White: "#f1f1f1",
    Blue: "#8ac6f2",
    Cyan: "#8abeb7",
    Green: "#7ccfaf",
    Magenta: "#99c",
    Red: "#cc817f",
    Yellow: "#fc9",
    Orange: "#de935f",

    bg: "#282a33",
}

const ui = {
    fg: colors.White,
    fgDark: colors.Black,
    bg: colors.bg,
    accent: colors.Blue,
    border: chroma(colors.bg).brighten(0.4).hex(),
    link: chroma(colors.Blue).brighten(0.6).hex(),
    info: {
        fg: colors.Blue,
        bg: chroma(colors.Blue).darken(2).hex(),
        border: chroma(colors.Blue).darken(1.5).hex(),
    },
    success: {
        fg: colors.Green,
        bg: chroma(colors.Green).darken(1).hex(),
        border: colors.Green
    },
    warning: {
        fg: colors.Yellow,
        bg: colors.Orange,
        border: chroma(colors.Orange).darken(1).hex()
    },
    error: {
        fg: colors.Red,
        bg: chroma(colors.Red).darken(2).hex(),
        border: chroma(colors.Red).darken(1.5).hex()
    }
}

const vcs = {
    added: colors.Green,
    deleted: colors.Red,
    modified: colors.Yellow,
    untracked: colors.Blue,
    ignored: chroma(colors.White).darken(2).hex()
}

const diff = {
    added: vcs.added,
    deleted: vcs.deleted,
    modified: vcs.modified,
    fill: colors.Blue,
}

const syntax = {
    tag: colors.Magenta,
    function: colors.Yellow,
    type: colors.Blue,
    string: colors.Magenta,
    markup: "",
    keyword: colors.Yellow,
    variable: colors.Green,
    comment: colors.Red,
    constant: colors.Red,
    number: colors.Red,
    operator: colors.White,
}

const terminal = {
    black: colors.Black,
    white: colors.White,
    blue: colors.Blue,
    cyan: colors.Cyan,
    green: colors.Green,
    magenta: colors.Magenta,
    red: colors.Red,
    yellow: colors.Yellow
}

export default {
    ui,
    vcs,
    diff,
    syntax,
    terminal
}