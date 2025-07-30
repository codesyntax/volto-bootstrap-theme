# Slots

Using Volto's [slots](https://6.docs.plone.org/volto/configuration/slots.html) feature, this theme provides some entry point for theme developers, to easily inject their own components in some places without needing to customize components in this theme.

These are the slots provided by this theme:

- preFooter: all components registered in this slot, will be rendered before the `<footer>` tag, in a div with a class named `pre-footer`.

- preFooterContent: all components registered in this slot, will be rendered inside the `<footer>` tag, in a div with a class named `pre-footer-content`.

- postFooter: all components registered in this slot, will be rendered before the `<footer>` tag, in a div with a class named `post-footer`.

- postFooterContent: all components registered in this slot, will be rendered inside the `<footer>` tag, in a div with a class named `post-footer-content`.

- preHeader: all components registered in this slot, will be rendered before the `<header>` tag, in a div with a class named `pre-header`.

- preHeaderContent: all components registered in this slot, will be rendered inside the `<header>` tag, in a div with a class named `pre-header-content`.

- postHeader: all components registered in this slot, will be rendered before the `<header>` tag, in a div with a class named `post-header`.

- postHeaderContent: all components registered in this slot, will be rendered inside the `<header>` tag, in a div with a class named `post-header-content`.

All those slots receive the current `content` as parameters.

The theme also provides the `aboveContent` and `belowContent` slots that Volto provides by itself.
belowContent
Refer to [Volto Slots documentation](https://6.docs.plone.org/volto/configuration/slots.html) to learn how to register and configure your own components in those slots.