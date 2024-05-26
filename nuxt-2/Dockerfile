# Stage 1 - build
FROM node:18.18-alpine as builder
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN  yarn
COPY . .
RUN yarn run build

# Stage 2 - production
FROM node:18.18-alpine AS runner
WORKDIR /app
ADD package.json .
ADD nuxt.config.js .
COPY --from=builder /app/.nuxt ./.nuxt
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/static ./static
COPY --from=builder /app/server-middleware ./server-middleware
COPY --from=builder /app/utils ./utils
COPY --from=builder /app/data ./data

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

EXPOSE 3000

CMD ["yarn", "run", "start"]