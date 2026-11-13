FROM node:20-alpine

WORKDIR api

COPY /apps/backend/package*.json .

RUN npm install

COPY . .

CMD [ "infisical run -- node app.js"]
