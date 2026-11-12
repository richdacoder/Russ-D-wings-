FROM node:20-alpine

WORKDIR /apps

COPY apps/web/package*.json ./

RUN npm install

RUN ls

COPY apps/lib/ .
COPY apps/web/ .

RUN ls


RUN npm run build

CMD ["npm", "start"]
