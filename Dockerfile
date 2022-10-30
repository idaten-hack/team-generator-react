FROM node:16-slim

COPY package.json yarn.lock ./
WORKDIR /app

RUN yarn install