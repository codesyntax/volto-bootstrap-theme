# Volto Bootstrap Theme


Volto Bootstrap Theme (or VBT) is to have a base Volto Theme based on [Bootstrap](https://getbootstrap.com/) so that CodeSyntax can bootstrap its Volto sites with a basic customization.


## Documentation
You can find the documentation of this package at https://volto-bootstrap-theme.readthedocs.io


## Contributing

Contributions are welcome! If you find any issues or want to suggest improvements, please check out:

- [Source Code](https://github.com/codesyntax/volto-bootstrap-theme/) 💻
- [Issue Tracker](https://github.com/codesyntax/volto-bootstrap-theme/issues) 🐛

Every pull request requires a [Change log entry](https://6.docs.plone.org/contributing/index.html#change-log-entry). The location of the `news` folder is the following:

- **backend**: `backend/news`
- **frontend**: `frontend/packages/volto-light-theme/news`

### Project Structure

This monorepo hosts two packages:

- **backend/**: Python package `cs.volto.bootstraptheme` providing Dexterity behaviors and example content.
- **frontend/**: React package `@codesyntax/volto-bootstrap-theme` providing the theme.

### Internationalization

Easily generate translation files for both Plone and Volto:

```sh
make i18n
```

## Credits & Acknowledgements 🙏

Thanks to [kitconcept GmbH](https://kitconcept.com) for creating and mantaining [volto-light-theme](https://github.com/kitconcept/volto-light-theme).

This repo's structure, the basic package, and many concepts have been borrowed from there.

Thanks to [Plone comunnyti](https://plone.org) for creating Plone and Volto.

This package is developed and maintained by [CodeSyntax](https://www.codesyntax.com) ❤️.
