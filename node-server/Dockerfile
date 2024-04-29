FROM node:20.12-alpine

COPY package.json ./
COPY yarn.lock ./

RUN  yarn
COPY . .

EXPOSE 8080

CMD [ "yarn", "run", "server" ]