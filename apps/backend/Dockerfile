FROM node:20-alpine

RUN npm install -g @infisical/cli

WORKDIR api

COPY /apps/backend/package*.json .

RUN npm install

COPY . .

CMD ["infisical","run", "--projectId=<28c3d08e-e6ae-41e5-8b12-10746ffffff7>" , "--", "node", "app.js"]
