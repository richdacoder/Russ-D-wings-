FROM node:20-alpine

WORKDIR /web/

COPY ["Russ D Wings/apps/web/package*.json", "./"]

RUN npm install

RUN ls

CMD ["npm", "start"]
