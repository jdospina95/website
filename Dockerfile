FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 24678

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
