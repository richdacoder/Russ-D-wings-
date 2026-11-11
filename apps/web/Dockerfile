FROM node:20-alpine

WORKDIR /web/

COPY apps/web/package*.json ./

RUN npm install

RUN ls

CMD ["npm", "start"]
