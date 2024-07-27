FROM node:lts-alpine

RUN apk add --no-cache bash

RUN apk add --no-cache tzdata

ENV TZ=America/Sao_Paulo

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app


