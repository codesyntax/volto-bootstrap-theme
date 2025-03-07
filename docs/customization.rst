Theme Customization
===================

Overview
--------
This document outlines the customizations made to the theme to better align it with modern design principles and user experience requirements. The modifications include layout adjustments, component enhancements, and style overrides using custom Sass variables.

Layout Adjustments
------------------
What is Changed?
~~~~~~~~~~~~~~~~
- Redesigned header and footer sections for improved navigation and brand visibility.
- Updated grid system and spacing to create a more balanced and visually appealing layout.
- Enhanced responsive behavior for optimal display across various devices.

How it Works
------------
Layout changes are implemented by modifying the base templates and CSS classes. Custom Sass mixins and variables help adjust the grid and spacing, ensuring a consistent look across all screen sizes.

Style Overrides and Custom Variables
-------------------------------------

What is Changed?
~~~~~~~~~~~~~~~~
Once the theme is installed and activated, users can further customize it by creating two specific files: `_main.scss` and `_variables.scss`.  
These files allow users to override the default theme settings, enabling a tailored design to meet project-specific needs.

How It Works
------------

After installing the theme, users can create the ``_main.scss`` and ``_variables.scss`` files inside their add-on's ``theme`` folder. These files provide easy customization of the theme’s styles:

- **_variables.scss**: This file allows users to override SCSS variables from the base theme, such as colors, typography, and spacing. Example::

.. code-block:: text

    $primary: pink;
    $font-size: 18px;
    $line-height: 24px;

- **_main.scss**: In this file, users can add custom styles or include additional SCSS/CSS files. This file helps define additional styles that will be applied on top of the base theme's default styles.


File Structure:
---------------
.. code-block:: text

    src/
    ├── components
    ├── index.js
    └── theme
        ├── _main.scss
        └── _variables.scss


This structure provides full flexibility to tailor the design while maintaining the integrity of the base theme. Users can update variables like colors, typography, and other properties, and apply custom styles for unique branding needs.

Conclusion
----------
Customizing the theme enhances both the visual appeal and functionality of the website. By refining layouts, improving components, and implementing centralized style overrides, the theme now offers a modern, user-friendly interface. These improvements lay a solid foundation for future updates and further personalization.
