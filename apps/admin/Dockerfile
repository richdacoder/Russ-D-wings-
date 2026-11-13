FROM node:20-alpine

WORKDIR /app/lib

COPY /apps/lib/ .

WORKDIR /app/admin

COPY /apps/admin/package*.json .

RUN npm install

COPY /apps/admin/ .

RUN npm run build

CMD ["npm", "start"]
