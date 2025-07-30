# Slots

Using Volto's [slots](https://6.docs.plone.org/volto/configuration/slots.html) feature, this theme provides some entry point for theme developers, to easily inject their own components in some places without needing to customize components in this theme.

These are the slots provided by this theme:

- preFooter: all components registered in this slot, will be rendered before the `<footer>` tag, in a div with a class named `pre-footer`.

- preFooterContent: all components registered in this slot, will be rendered inside the `<footer>` tag, in a div with a class named `pre-footer-content`.

- postFooter: all components registered in this slot, will be rendered before the `<footer>` tag, in a div with a class named `post-footer`.

- postFooterContent: all components registered in this slot, will be rendered inside the `<footer>` tag, in a div with a class named `post-footer-content`.