# Listing block

We have refactored the listing block following some ideas taken from [volto-light-theme](https://github.com/kitconcept/volto-light-theme)

## One single variation: Grid

We have removed all default variations for the listing template and leave only a new one: Grid

This variation lets the user to show the contents of the listing in a grid from with selectable item count on each row.

Moreover it provides an option to link some other page from the bottom of the listing

## Grid items: Cards

To show each of the item in the listing view, we have copied the Card primitive from [volto-light-theme](https://github.com/kitconcept/volto-light-theme) and convert it to work with Bootstrap classes.

Moreover we have provided a way to configure which are the contents of those cards.

To do so, we have registered a component nammed `CardBodyContent` which will render the contents of the card.

We provide a sensible default that renders the title of the item with the link.

We provide also two example components for News Items and Events, and each of them render the effective date and the start date, respectively, of the items.

You can use a call like this one to register your own components:

```js
  config.registerComponent({
    name: 'CardBodyContent',
    component: NewsItemCardBody,
    dependencies: ['MyPortalType'], // here you should put your item's portal_type
  });

```

## Grid item: Custom template

If the `Card` component doesn't work for you, you can register your own `ListingBlockGridTemplateCustomItemBodyTemplate` component that will render the item,

You can use the following registration example in your project:

```js
  config.registerComponent({
    name: 'ListingBlockGridTemplateCustomItemBodyTemplate',
    component: NewsItemGridItemTemplate,
    dependencies: ['MyPortalType'], // here you should put your item's portal_type
  });

```