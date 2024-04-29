FROM node:20.12-alpine
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN  yarn
COPY . .

EXPOSE 8080

CMD [ "yarn", "run", "server" ]