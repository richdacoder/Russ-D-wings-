FROM node:20-alpine

WORKDIR /apps/admin

COPY /apps/admin/package*.json .

RUN npm build

COPY /apps/admin/ .

CMD ["npm", "run"]
