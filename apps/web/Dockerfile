FROM node:20-alpine

WORKDIR /apps

COPY apps/web/package*.json ./

RUN npm install

RUN ls -la

COPY apps/lib/ .

RUN ls -la

COPY apps/web/ .

RUN ls -la



RUN npm run build

CMD ["npm", "start"]
