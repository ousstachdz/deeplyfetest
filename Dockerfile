FROM node:16-alpine3.14

WORKDIR /frontend

COPY . .

RUN npm install

RUN npm run build


CMD [ "npm", "run", "dev"]