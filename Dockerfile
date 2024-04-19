FROM node:21.6.2

RUN npm install -g typescript ts-node

WORKDIR /app
