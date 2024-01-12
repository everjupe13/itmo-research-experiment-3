#!/bin/sh

IMAGE_NAME=itmo-nuxt2_front
CONTAINER_NAME=itmo-nuxt2_container

docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME
docker rmi -f $IMAGE_NAME