from cs.volto.bootstraptheme import _
from cs.volto.bootstraptheme.behaviors import base
from plone.autoform import directives
from plone.autoform.interfaces import IFormFieldProvider
from plone.schema import JSONField
from plone.supermodel import model
from zope.interface import provider


@provider(IFormFieldProvider)
class INavrootFooterLinks(model.Schema):
    """Links to be shown in the navroot footer
        They work as site actions, but specific to each navigation root
    """

    model.fieldset(
        "navroot_footer_links",
        label=_("Navigation root footer links"),
        fields=[
            "navroot_footer_links",
        ],
    )

    directives.widget(
        "navroot_footer_links",
        frontendOptions={
            "widget": "object_list",
            "widgetProps": {"schemaName": "navrootFooterLinks"},
        },
    )
    navroot_footer_links = JSONField(
        title=_("Footer Links"),
        schema=base.OBJECT_LIST,
        default=base.OBJECT_LIST_DEFAULT_VALUE,
        required=False,
        widget="",
    )
