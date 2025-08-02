# Block widths

The content of a page that uses blocks, doesn't have a wrapper div with class="container" which would restrict the width of the content to the selected width.

Instead we register a wrapper without any class indication.

Furthermore, all blocks have an option to set their own widht. 3 different widhts can be selected:

- wide: this is the default, it corresponds to the `.container` class in Bootstrap.
- full: this will make the block to take the full width (100%) of the page.
- narrow: this will make the block to take a narrow width

By default all blocks receive this width selector.