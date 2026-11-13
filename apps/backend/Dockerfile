FROM node:20-alpine

RUN npm install -g @infisical/cli

WORKDIR api

COPY /apps/backend/package*.json .

RUN npm install

RUN infisical init

COPY . .

CMD ["infisical", "run", "--", "node", "app.js"]
