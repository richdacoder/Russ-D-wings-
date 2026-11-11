FROM node:20-alpine

WORKDIR /web/

COPY package*.json ./

RUN npm install
RUN ls

CMD ["npm", "start"]
