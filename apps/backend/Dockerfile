FROM node:20-alpine

WORKDIR api

COPY /apps/backend/package*.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]
