# Installation

Install `@codesyntax/volto-bootstrap-theme` in your project package.


In addition to the `volto-bootstrap-theme` package, you should also install the following add-ons in your project setup:

```json

   "dependencies": {
    "@eeacms/volto-accordion-block": "^10.4.6",
    "bootstrap": "^5.3.3",
    "sass": "^1.85.0",
    "@kitconcept/volto-slider-block": "^6.3.1",
    "embla-carousel-autoplay": "^8.0.0",
    "embla-carousel-react": "^8.0.0",
    "@kitconcept/volto-button-block": "*",
    "@eeacms/volto-columns-block": "^8.0.1",
    "@eeacms/volto-block-style": "*",
    "@codesyntax/volto-bootstrap-theme"
  }
```
```{note}

   The version numbers of these add-ons are merely illustrative, but current as of 2025-03-05.
   You should update the versions to their latest.
```
This theme will not install the add-ons for you, as they are declared as `peerDependencies`.
This is because the theme won't have to force you to use any specific add-on version, and avoids package hoisting issues.

In your project or policy add-on {file}`package.json`, you should declare all of them as Volto add-ons:

```json

    "addons": [
    "@eeacms/volto-accordion-block",
    "@kitconcept/volto-slider-block",
    "@kitconcept/volto-button-block",
    "@eeacms/volto-columns-block",
    "@eeacms/volto-block-style",
    "@eeacms/volto-tabs-block",
    "@codesyntax/volto-bootstrap-theme",
  ],
```
Your policy add-on should be the last one, so that it overrides any previous ones.
{code}`volto-bootstrap-theme` should be the second-last, placed immediately before your policy add-on.

Then, declare the theme in your project {file}`package.json`:

``` json

  "theme": "@codesyntax/volto-bootstrap-theme",
```
Alternatively, you can declare it in your project's {file}`volto.config.js`:

``` js

  const addons = [];
  const theme = '@codesyntax/volto-bootstrap-theme';

  module.exports = {
    addons,
    theme,
  };
```
Although you can specify your project add-ons in {file}`volto.config.js`, sometimes it is better to have them all in one place in your policy add-on for portability.
