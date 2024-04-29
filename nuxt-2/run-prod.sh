#!/bin/sh

IMAGE_NAME=itmo-nuxt2_front
CONTAINER_NAME=itmo-nuxt2_container

docker build -t $IMAGE_NAME .
# docker run -d --rm -p 3000:3000 --name $CONTAINER_NAME $IMAGE_NAME
docker run -d -p 3020:3000 --name $CONTAINER_NAME $IMAGE_NAME
