FROM node:20-alpine

WORKDIR api

COPY /apps/backend/package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["sh", "-c","npx knex migrate:latest --env production --knexfile apps/backend/knexfile.js && apps/backend/myapp/app.js"]
