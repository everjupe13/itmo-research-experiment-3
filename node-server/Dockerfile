FROM node:20.12-alpine

COPY package.json ./
COPY yarn.lock ./

RUN  yarn
COPY . .
COPY ./public .
COPY ./results .

EXPOSE 8080

CMD [ "yarn", "run", "server" ]