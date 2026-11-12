FROM node:20-alpine

WORKDIR /apps

COPY apps/web/package*.json ./

RUN npm install

COPY apps/lib/ . apps/web/ .

RUN npm run build

CMD ["npm", "start"]
