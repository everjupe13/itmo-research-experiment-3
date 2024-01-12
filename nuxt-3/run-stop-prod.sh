#!/bin/sh

IMAGE_NAME=itmo-nuxt3_front
CONTAINER_NAME=itmo-nuxt3_container

docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME
docker rmi -f $IMAGE_NAME