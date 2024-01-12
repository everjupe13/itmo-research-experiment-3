#!/bin/sh

IMAGE_NAME=itmo-nuxt3_front
CONTAINER_NAME=itmo-nuxt3_container

docker build -t $IMAGE_NAME .
# docker run -d --rm -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME
docker run -d --restart unless-stopped -p 3003:3000 --name $CONTAINER_NAME $IMAGE_NAME
