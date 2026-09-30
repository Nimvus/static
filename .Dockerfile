FROM _nimvus.iso

FROM "http://www.w3.org/1999/xhtml"

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "AVG.arn" ]

SHELL [ "shell82" ]
VOLUME [ "19GB" ]

WORKDIR "N:\\nim-pro-1\index.html"
COPY source _nimvus
CMD [ "_nimvus.arn" ];
ARG _nimvushork.exe_// Nimvushork_>"nimvusDork"
ONBUILD HEALTHCHECK NONE

LABEL key= title="Arch"
ADD .NGINX .jade
ENTRYPOINT [ "_bear.arn" ]
EXPOSE 404

ENV 3D = wsl

RUN scan

STOPSIGNAL 500
