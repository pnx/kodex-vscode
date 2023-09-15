# Change Log

All notable changes to the "kodex" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.4.1] - 2023-09-15

### Added

* PHP: Added highlight of `<?php` and `?>` tags.
* PHP: Added highlight of traits.

## [0.4.0] - 2023-06-11

### Changed

- Refactor of all token scopes. trying to first style generic ones like "keyword", "type" and then
  override for specific languages if needed. This results in more consistent theming across languages.

- Variables are now properly highlighted in most cases (as a result of the refactoring).

## [0.3.6] - 2023-06-09

### Changed

- Better highlight for operator tokens.
- Better highlight for some storage type tokens.

## [0.3.5] - 2023-05-28

### Changed

- Better support for "interface" tokens.

## [0.3.4] - 2023-05-25

### Changed

- Better support for "keys" tokens.
- Better support for "function" tokens.

## [0.3.3] - 2023-02-24

### Added

- Support for lua.

## [0.3.2] - 2023-02-20

### Added

- PHP: Added `interface` keyword
- Go: Added `map` keyword
- Added "Operator" syntax class. (default text color)


## [0.3.1] - 2023-02-12

### Changed

- Fix red color for Kodex Arctic

## [0.3.0] - 2023-02-12

### Added

- New variant of the theme: Kodex Arctic!

## [0.2.6] - 2023-02-01

### Added

- Go: syntax highlighting for `chan` keyword
- Go: syntax highlighting for builtin functions.

## [0.2.5] - 2022-11-30

### Added

- Go: syntax highlighting for octal numbers
- Shell: Improved highligting for functions.

## [0.2.4] - 2022-10-30

### Added

- Go: syntax highlighting for `const` keyword.

### Changes

- UI: Panel active border color now uses accent color
- UI: Fix contrast on input options (accent color on background, and light/dark foreground depending on background)

## [0.2.3] - 2022-10-19

### Changed

- Improved tooling.

## [0.2.2] - 2022-10-19

### Added

- TypeScript: Added support for TypeScript again as it got removed by accident in a previous version.

### Changed

- Change yellow color to `#fc9`

## [0.2.1] - 2022-10-19

### Changed

- Ignore development files when packaging extension.

## [0.2.0] - 2022-10-19

### Added

- Template system using typescript.
- Basic python support.

### Changed

- Minor color changes throughout the theme due to the new template system.

## [0.1.5] - 2022-10-15

### Added

- debug icon colors.
- debug console colors.
- TypeScript: Added support for TypeScript

### Changed

- debug status bar colors.
- statusBarItem.hoverBackground to transparent black.

## [0.1.4] - 2022-10-07

### Added

- Golang: highlight hexadecimals as numbers
- JavaScript: support for JavaScript

### Removed

- PHP: highlighting of class name of an inherited class.

## [0.1.3] - 2022-09-29

### Added

- fix `$this` variable and `function` keyword for `php`.

## [0.1.2] - 2022-09-25

### Added

- Highlighting for `golang` and `cmake`.

## [0.1.1] - 2022-09-21

### Added

- Highlighting for `variables` in some languages.
- Support for `php`, `html`, `css` and `scss`.

### Changed

- Overall look-and-feel of the theme is more gray-blueish than just gray.
- Updated terminal colors.

## [0.1.0] - 2022-09-21

- Initial release
