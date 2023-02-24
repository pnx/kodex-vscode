import chroma from 'chroma-js'
import * as helper from './color_helpers'

// https://code.visualstudio.com/api/references/theme-color

export default (name: string, scheme: any) => {

    // Helper variables.
    const fgDarken = chroma(scheme.ui.fg).darken().hex()

    const bg = [
        chroma(scheme.ui.bg).darken(0.25).hex(),
        chroma(scheme.ui.bg).darken(0.2).hex(),
        chroma(scheme.ui.bg).darken(0.1).hex(),
        scheme.ui.bg,
        chroma(scheme.ui.bg).brighten(0.2).hex(),
        chroma(scheme.ui.bg).brighten(0.4).hex(),
        chroma(scheme.ui.bg).brighten(1).hex(),
        chroma(scheme.ui.bg).brighten(1.4).hex()
    ]

    return {
        name: name,
        colors: {

            // Base
            "foreground": scheme.ui.fg,
            "focusBorder": scheme.ui.border,

            // Notifications
            "notificationCenter.border": scheme.ui.border,
            "notificationCenterHeader.foreground": scheme.ui.fg,
            "notificationCenterHeader.background": scheme.ui.accent,
            "notificationToast.border": scheme.ui.border,
            "notifications.foreground": scheme.ui.fg,
            "notifications.background": bg[4],

            // Editor
            "editor.background": bg[3],
            "editor.foreground": scheme.ui.fg,
            "editor.lineHighlightBackground": bg[4],
            "editor.selectionBackground": bg[5],
            "editor.selectionHighlightBorder": scheme.ui.fg,

            // Editor bracket
            "editorBracketMatch.background": bg[7],
            "editorBracketMatch.border": scheme.ui.border,
            "editorBracketHighlight.foreground1": scheme.ui.fg,
            "editorBracketHighlight.foreground2": scheme.ui.fg,
            "editorBracketHighlight.foreground3": scheme.ui.fg,

            // Editor cursor
            "editorCursor.foreground": scheme.ui.fg,

            "editorGroupHeader.tabsBackground": bg[1],
            "editorHoverWidget.background": bg[4],
            "editorHoverWidget.foreground": helper.ContrastColor(bg[4], scheme.ui.fg, scheme.ui.fgDark),
            "editorHoverWidget.border": scheme.ui.border,
            "editorSuggestWidget.background": bg[4],
            "editorSuggestWidget.border": scheme.ui.border,
            "editorSuggestWidget.selectedBackground": bg[5],
            "editorWarning.foreground": scheme.ui.warning.fg,
            "editorWhitespace.foreground": chroma(scheme.ui.fg).alpha(0.1).hex(),

            // Editor indent
            "editorIndentGuide.activeBackground": chroma(scheme.ui.border).brighten(1).hex(),
            "editorIndentGuide.background": scheme.ui.border,

            // Editor find
            "editor.findMatchBackground": scheme.ui.info.bg,
            "editor.findMatchBorder": scheme.ui.info.border,
            "editor.findMatchHighlightBackground": scheme.ui.info.bg,

            // Editor widget
            "editorWidget.background": bg[1],

            // Activity bar
            "activityBar.background": bg[0],
            "activityBar.foreground": scheme.ui.accent,
            "activityBar.activeBackground": chroma(scheme.ui.accent).alpha(0.25).hex(),
            "activityBar.inactiveForeground": scheme.ui.fg,
            "activityBarBadge.background": scheme.ui.accent,
            "activityBarBadge.foreground": helper.ContrastColor(scheme.ui.accent, scheme.ui.fg, scheme.ui.fgDark),

            // Text
            "textLink.foreground": scheme.ui.link,
            "textBlockQuote.background": bg[0],
            "textBlockQuote.border": scheme.ui.border,
            "textCodeBlock.background": bg[0],
            "textPreformat.foreground": scheme.ui.accent,

            // Diff
            "diffEditor.insertedTextBackground": chroma(scheme.diff.added).alpha(0.4).hex(),
            "diffEditor.insertedLineBackground": chroma(scheme.diff.added).alpha(0.3).hex(),
            "diffEditor.removedLineBackground": chroma(scheme.diff.deleted).alpha(0.3).hex(),
            "diffEditor.diagonalFill": chroma(scheme.diff.fill).alpha(0.2).hex(),

            // Line number
            "editorLineNumber.activeForeground": scheme.ui.accent,
            "editorLineNumber.foreground": chroma(scheme.ui.accent).luminance(0.15).desaturate(0.1).hex(),

            // Gutter
            "editorGutter.background": bg[2],
            "editorGutter.addedBackground": scheme.diff.added,
            "editorGutter.deletedBackground": scheme.diff.deleted,
            "editorGutter.modifiedBackground": scheme.diff.modified,

            // Debug
            "editor.stackFrameHighlightBackground": chroma(scheme.ui.warning.bg).alpha(.4).hex(),
            "debugIcon.startForeground": scheme.ui.success.fg,
            "debugIcon.stopForeground": scheme.ui.error.fg,
            "debugIcon.restartForeground": scheme.ui.warning.fg,
            "debugIcon.pauseForeground": scheme.ui.info.fg,
            "debugIcon.continueForeground": scheme.ui.success.fg,
            "debugIcon.stepBackForeground": scheme.ui.info.fg,
            "debugIcon.stepIntoForeground": scheme.ui.info.fg,
            "debugIcon.stepOutForeground": scheme.ui.info.fg,
            "debugIcon.breakpointCurrentStackframeForeground": scheme.ui.warning.fg,
            "debugIcon.breakpointForeground": scheme.ui.error.fg,

            // Debug Toolbar
            "debugToolBar.background": bg[1],

            // Debug Console
            "debugConsole.infoForeground": scheme.ui.info.fg,
            "debugConsole.errorForeground": scheme.ui.error.fg,
            "debugConsole.warningForeground": scheme.ui.warning.fg,

            // Debug View
            "debugView.valueChangedHighlight": scheme.ui.warning.bg,

            // Debug Tokens
            "debugTokenExpression.name": scheme.syntax.tag,
            "debugTokenExpression.value": fgDarken,
            "debugTokenExpression.string": scheme.syntax.string,
            "debugTokenExpression.boolean": scheme.syntax.constant,
            "debugTokenExpression.number": scheme.syntax.number,

            // Testing
            "testing.iconFailed": scheme.ui.error.fg,
            "testing.iconErrored": scheme.ui.error.fg,
            "testing.iconPassed": scheme.ui.success.fg,
            "testing.message.info.lineBackground": scheme.ui.info.bg,
            "testing.message.error.lineBackground": scheme.ui.error.bg,

            // Menu
            "menu.background": bg[1],
            "menu.foreground": scheme.ui.fg,
            "menu.selectionBackground": scheme.ui.bg,
            "menu.separatorBackground": scheme.ui.border,
            "menubar.selectionBackground": scheme.ui.bg,
            "menubar.selectionForeground": scheme.ui.fg,

            // Input
            "input.background": bg[4],
            "input.foreground": scheme.ui.fg,
            "input.border": scheme.ui.border,
            "inputOption.hoverBackground": bg[6],
            "inputOption.activeForeground": helper.ContrastColor(scheme.ui.accent, scheme.ui.fg, scheme.ui.fgDark),
            "inputOption.activeBackground": scheme.ui.accent,
            "inputOption.activeBorder": "#00000000",
            "inputValidation.infoBackground": scheme.ui.info.bg,
            "inputValidation.infoForeground": scheme.ui.info.fg,
            "inputValidation.infoBorder": scheme.ui.info.border,
            "inputValidation.warningBackground": scheme.ui.warning.bg,
            "inputValidation.warningForeground": scheme.ui.warning.fg,
            "inputValidation.warningBorder": scheme.ui.warning.border,
            "inputValidation.errorBackground": scheme.ui.error.bg,
            "inputValidation.errorForeground": scheme.ui.error.fg,
            "inputValidation.errorBorder": scheme.ui.error.border,

            // Button
            "button.background": scheme.ui.accent,
            "button.foreground": helper.ContrastColor(scheme.ui.accent, scheme.ui.fg, scheme.ui.fgDark),
            "button.secondaryBackground": bg[5],
            "button.secondaryForeground": helper.ContrastColor(bg[5], scheme.ui.fg, scheme.ui.fgDark),

            // Dropdown
            "dropdown.background": bg[4],
            "dropdown.border": scheme.ui.border,
            "dropdown.listBackground": scheme.ui.bg,

            // Checkbox
            "checkbox.foreground": scheme.ui.accent,
            "checkbox.background": bg[4],
            "checkbox.border": scheme.ui.border,

            // Badge
            "badge.background": bg[5],
            "badge.foreground": helper.ContrastColor(bg[5], scheme.ui.fg, scheme.ui.fgDark),

            // Lists
            "list.activeSelectionBackground": bg[5],
            "list.activeSelectionForeground": scheme.ui.fg,
            "list.focusBackground": bg[4],
            "list.focusForeground": scheme.ui.fg,
            "list.highlightForeground": scheme.ui.fg,
            "list.hoverBackground": bg[4],
            "list.hoverForeground": scheme.ui.fg,
            "list.inactiveSelectionBackground": bg[4],
            "list.inactiveSelectionForeground": scheme.ui.fg,
            "list.warningForeground": scheme.ui.warning.fg,

            // Minimap gutter
            "minimapGutter.addedBackground": scheme.diff.added,
            "minimapGutter.deletedBackground": scheme.diff.deleted,
            "minimapGutter.modifiedBackground": scheme.diff.modified,

            // Panel
            "panel.border": scheme.ui.border,
            "panel.background": bg[3],
            "panelTitle.activeBorder": scheme.ui.accent,

            // Peak View
            "peekView.border": scheme.ui.accent,
            "peekViewTitle.background": chroma(scheme.ui.accent).alpha(.2).hex(),
            "peekViewTitleDescription.foreground": fgDarken,
            "peekViewTitleLabel.foreground": scheme.ui.fg,
            "peekViewEditor.background": bg[4],
            "peekViewEditorGutter.background": bg[3],
            "peekViewEditor.matchHighlightBackground": bg[6],
            "peekViewResult.background": bg[4],

            // Scrollbar
            "scrollbar.shadow": chroma(scheme.ui.bg).brighten(2).hex(),
            "scrollbarSlider.activeBackground": chroma(scheme.ui.bg).brighten().alpha(0.7).hex(),
            "scrollbarSlider.background": chroma(scheme.ui.bg).brighten().alpha(0.7).hex(),
            "scrollbarSlider.hoverBackground": chroma(scheme.ui.bg).brighten().alpha(0.7).hex(),

            // Sidebar
            "sideBar.background": bg[1],
            "sideBar.foreground": scheme.ui.fg,
            "sideBarSectionHeader.background": chroma(scheme.ui.bg).darken(0.3).hex(),
            "sideBarSectionHeader.foreground": scheme.ui.fg,

            // Statusbar
            "statusBar.background": bg[1],
            "statusBar.foreground": helper.ContrastColor(bg[1], chroma(scheme.ui.fg).darken().hex(), scheme.ui.fgDark),
            "statusBar.noFolderBackground": "#21252b",
            "statusBar.focusBorder": "#212934",
            "statusBar.debuggingBackground": scheme.ui.warning.bg,
            "statusBar.debuggingForeground": helper.ContrastColor(scheme.ui.warning.bg, scheme.ui.fg, scheme.ui.fgDark),
            "statusBar.debuggingBorder": "#00000000",
            "statusBarItem.hoverBackground": chroma("#000000").alpha(0.2).hex(),
            "statusBarItem.remoteBackground": scheme.ui.accent,
            "statusBarItem.remoteForeground": "#000",
            "statusBarItem.prominentBackground": "#8ac6f2",
            "statusBarItem.prominentForeground": "#000",

            // Tabs
            "tab.activeBackground": bg[4],
            "tab.activeBorder": scheme.ui.accent,
            "tab.activeForeground": scheme.ui.fg,
            "tab.border": scheme.ui.bg,
            "tab.hoverBackground":  chroma(scheme.ui.bg).brighten(0.15).hex(),
            "tab.inactiveBackground": scheme.ui.bg,
            // "tab.unfocusedHoverBackground": "#323842",

            // Terminal
            "terminal.ansiBlack": scheme.terminal.black,
            "terminal.ansiWhite": scheme.terminal.white,
            "terminal.ansiBlue": scheme.terminal.blue,
            "terminal.ansiCyan": scheme.terminal.cyan,
            "terminal.ansiGreen": scheme.terminal.green,
            "terminal.ansiMagenta": scheme.terminal.magenta,
            "terminal.ansiRed": scheme.terminal.red,
            "terminal.ansiYellow": scheme.terminal.yellow,
            "terminal.ansiBrightBlack": scheme.terminal.black,
            "terminal.ansiBrightWhite": scheme.terminal.white,
            "terminal.ansiBrightBlue": scheme.terminal.blue,
            "terminal.ansiBrightCyan": scheme.terminal.cyan,
            "terminal.ansiBrightGreen": scheme.terminal.green,
            "terminal.ansiBrightMagenta": scheme.terminal.magenta,
            "terminal.ansiBrightRed": scheme.terminal.red,
            "terminal.ansiBrightYellow": scheme.terminal.yellow,
            "terminal.background": scheme.ui.bg,
            "terminal.border": scheme.ui.border,
            "terminal.foreground": fgDarken,
            "terminal.selectionBackground": chroma(scheme.ui.fg).alpha(0.25).hex(),

            // Titlebar
            "titleBar.activeBackground": bg[1],
            "titleBar.activeForeground": scheme.ui.fg,
            "titleBar.inactiveBackground": bg[1],
            "titleBar.inactiveForeground": fgDarken,

            // Settings
            "settings.focusedRowBackground": bg[5],
            "settings.modifiedItemIndicator": scheme.ui.accent,

            // Git
            "gitDecoration.ignoredResourceForeground": scheme.vcs.ignored,
            "gitDecoration.addedResourceForeground": scheme.vcs.added,
            "gitDecoration.modifiedResourceForeground": scheme.vcs.modified,
            "gitDecoration.deletedResourceForeground": scheme.vcs.deleted,
            "gitDecoration.untrackedResourceForeground": scheme.vcs.untracked,

            // Tree
            "tree.indentGuidesStroke": chroma(scheme.ui.fg).alpha(0.25).hex(),
        },
        tokenColors: [
            {
                "name": "String",
                "scope": [
                    "string"
                ],
                "settings": {
                    "foreground": scheme.syntax.string
                }
            },
            {
                "name": "Tag",
                "scope": [
                    "constant.other.symbol",
                    "constant.other.key",
                    "markup.heading",
                    "markup.inserted.git_gutter",
                    "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
                ],
                "settings": {
                    "foreground": scheme.syntax.tag
                }
            },
            {
                "name": "Numbers",
                "scope": [
                    "constant.numeric",
                    "keyword.other.unit.hexadecimal.go",
                    "keyword.other.unit.octal.go"
                ],
                "settings": {
                    "foreground": scheme.syntax.number
                }
            },
            {
                "name": "Constants",
                "scope": [
                    "constant.character",
                    "constant.source.cmake"
                ],
                "settings": {
                    "foreground": scheme.syntax.constant
                }
            },
            {
                "name": "Types, Macros, Character Escape, Special Tags",
                "scope": [
                    "storage.type.primitive",
                    "storage.type.built-in",
                    "storage.type.string.go",
                    "storage.type.error.go",
                    "storage.type.numeric.go",
                    "storage.type.boolean.go",
                    "storage.type.byte.go",
                    "storage.source.cmake",
                    "keyword.interface.go",
                    "keyword.channel.go",
                    "keyword.local.lua",
                    "entity.name.type.parameter.cpp",
                    "entity.other.attribute-name",
                    "support.type.primitive.ts",
                    "variable.other.constant.object.ts",
                    "variable.other.object.ts",
                    "meta.preprocessor.macro.cpp",
                    "constant.language",
                    "constant.character.escape",
                    "keyword.blade"
                ],
                "settings": {
                    "foreground": scheme.syntax.type
                }
            },
            {
                "name": "Comment",
                "scope": [
                    "comment",
                    "punctuation.definition.comment"
                ],
                "settings": {
                    "foreground": scheme.syntax.comment
                }
            },
            {
                "name": "Keyword, Namespace",
                "scope": [
                    "keyword.control",
                    "keyword.other",
                    "keyword.cmake",
                    "keyword.import.go",
                    "keyword.package.go",
                    "keyword.function.go",
                    "keyword.var.go",
                    "keyword.type.go",
                    "keyword.struct.go",
                    "keyword.const.go",
                    "keyword.map.go",
                    "storage.type.class",
                    "storage.modifier",
                    "storage.type.js",
                    "storage.type.function.js",
                    "storage.type.modifier",
                    "storage.type.struct",
                    "storage.type.function.php",
                    "storage.type.function.shell",
                    "storage.type.interface.php",
                    "support.function.builtin.shell",
                    "support.function.builtin.go",
                    "support.function.lua",
                    "storage.type.ts",
                    "entity.name.scope-resolution",
                    "entity.source.cmake",
                    "storage.type.namespace",
                    "storage.type.enum",
                    "storage.type.function.python",
                    "support.type.property-name",
                    "entity.name.tag",
                    "support.class",
                    "punctuation.section.embedded"
                ],
                "settings": {
                    "foreground": scheme.syntax.keyword
                }
            },
            {
                "name": "Operator",
                "scope": [
                    "keyword.operator.logical.go",
                    "keyword.operator.assignment.go",
                    "keyword.operator.comparison.go",
                    "keyword.operator.address.go"
                ],
                "settings": {
                    "foreground": scheme.syntax.operator
                }
            },
            {
                "name": "Variables",
                "scope": [
                    "variable.source.cmake",
                    "variable.scss",
                    "variable.other.php",
                    "variable.language.this.php",
                    "variable.other.constant.ts",
                    "meta.object.member.ts",
                    "meta.template.expression.ts",
                    "variable.parameter.function"
                ],
                "settings": {
                    "foreground": scheme.syntax.variable
                }
            },
            {
                "name": "Invalid",
                "scope": [
                    "invalid",
                    "invalid.illegal"
                ],
                "settings": {
                    "foreground": "#FF0000",
                    "fontStyle": "underline"
                }
            }
        ]
    }
}