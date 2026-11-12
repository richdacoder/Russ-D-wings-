FROM node:20-alpine

WORKDIR /apps

COPY apps/web/package*.json ./

RUN npm install

RUN ls -la

COPY apps/lib/ ./lib/

RUN npm run build

COPY apps/web/ .

RUN ls -la

RUN npm run build

CMD ["npm", "start"]
