# Stage 1 - build
FROM node:18.18-alpine AS builder
ENV NODE_ENV=production

WORKDIR /app
COPY package.json ./
RUN npm install --production=false
COPY . .
RUN npm run build

# Stage 2 - production
FROM node:18.18-alpine AS runner
WORKDIR /app

COPY --from=builder /app/.output /app/.output

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]