# syntax=docker/dockerfile:1
FROM varnish:7.6

LABEL maintainer="Plone Foundation <collective@plone.org>" \
      org.label-schema.name="volto-bootstrap-theme-varnish" \
      org.label-schema.description="volto-bootstrap-theme Varnish image." \
      org.label-schema.vendor="Plone Foundation"

COPY etc/varnish.vcl /etc/varnish/default.vcl
