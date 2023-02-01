# Developing VS Code Theme Extensions

## Folder structure

* This folder contains all of the files necessary for your color theme extension.
* `package.json` - this is the manifest file that defines the location of the theme file and spec1ifies the base theme of the theme.
* `src/theme_default.ts` - the color theme definition file.
* `themes/default.json` - the rendered color theme.

## Compiling

Install dependancies

```
npm install -i
```

Update theme

```
npm run build
```

## Get up and running straight away

* Press `F5` to open a new window with your extension loaded.
* Open `File > Preferences > Color Themes` and pick your color theme.
* Open a file that has a language associated. The languages' configured grammar will tokenize the text and assign 'scopes' to the tokens. To examine these scopes, invoke the `Developer: Inspect Editor Tokens and Scopes` command from the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac).

## Make changes

* Changes to the theme file are automatically applied to the Extension Development Host window.
