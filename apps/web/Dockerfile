FROM node:20-alpine

WORKDIR /app

COPY apps/web/package*.json ./web/

RUN npm install

COPY apps/lib/ ./lib

COPY apps/web/ ./web/

RUN npm run build

CMD ["npm", "start"]
