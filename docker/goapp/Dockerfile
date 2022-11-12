FROM golang:1.11-alpine

RUN apk update && \
    apk add --no-cache bash

WORKDIR /src/
COPY main.go go.* /src/
RUN CG__ENABLED=0 go build -o /bin/demo

ENTRYPOINT ["/bin/demo"]