FROM node:20-alpine

WORKDIR /apps

COPY apps/web/package*.json ./

RUN npm install

RUN ls

COPY /lib/ .
COPY /web/ .

RUN ls


RUN npm run build

CMD ["npm", "start"]
