FROM node:20.12-alpine
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN  yarn
COPY . .

CMD [ "yarn", "run", "server" ]