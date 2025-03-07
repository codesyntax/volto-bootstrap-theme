# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html
import os
import json
# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = '@codesyntax/volto-bootstrap-theme'
copyright = '2025, CodeSyntax'
author = 'CodeSyntax'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = ["myst_parser",]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'plone_sphinx_theme'
html_static_path = ['_static']



with open(os.path.join(os.path.abspath("."), "../frontend/package.json"), "r") as package_json:
    data = package_json.read()

version_from_package_json = json.loads(data)["version"]

if version_from_package_json:
    version = version_from_package_json
    release = version_from_package_json
else:
    version = "1.0.0"
    release = "1.0.0"