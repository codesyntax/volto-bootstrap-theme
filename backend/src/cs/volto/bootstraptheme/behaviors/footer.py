from cs.volto.bootstraptheme import _
from plone.autoform import directives
from plone.autoform.interfaces import IFormFieldProvider
from plone.namedfile.field import NamedBlobImage
from plone.schema import JSONField
from plone.supermodel import model
from zope.interface import provider
from zope.schema import Text
from zope.schema import TextLine

import json


OBJECT_LIST_DEFAULT_VALUE = []

OBJECT_LIST = json.dumps(
    {
        "type": "array",
        "items": {
            "type": "object",
        },
    }
)


@provider(IFormFieldProvider)
class IVoltoFooterSettings(model.Schema):
    """Site/Subsite footer properties behavior."""

    model.fieldset(
        "footer",
        label=_("Footer customizations"),
        fields=[
            "footer_address_line_one",
            "footer_address_line_two",
            "footer_logo",
            "footer_logo_link",
        ],
    )

    footer_address_line_one = Text(
        title=_("Footer address line one"),
        description=_(
            "The footer address that appears below the footer logo in the"
            " first footer column."
        ),
        required=False,
    )

    footer_address_line_two = Text(
        title=_("Footer address line two"),
        description=_(
            "The footer address that appears below the footer logo in the"
            " first footer column."
        ),
        required=False,
    )

    footer_logo = NamedBlobImage(
        title=_("label_footer_logo", default="Footer Logo"),
        description=_(
            "help_footer_logo",
            default="The footer can have a prominent logo located in the lower"
            " right side. It is normally used for displaying the logo of the site"
            " sponsor.",
        ),
        required=False,
    )

    directives.widget(
        "footer_logo_link",
        frontendOptions={
            "widget": "url",
        },
    )
    footer_logo_link = TextLine(
        title=_("label_footer_logo_link", default="Footer Logo Link"),
        description=_(
            "help_footer_logo_link",
            default="The footer logo can be linked to a URL.",
        ),
        required=False,
    )
