#!/bin/bash
set -e

SERVER="mongodb";
DB="db";

echo "echo stop & remove old docker [$SERVER] and starting new fresh instance of [$SERVER]"
(docker kill $SERVER || :) && \
  (docker rm $SERVER || :) && \
  docker run --name $SERVER -p 5432:5432 -d mongo


echo "sleep wait for mongo server: [$SERVER] to start";
sleep 3;

# create the db
echo "CREATE DATABASE $DB ENCODING 'UTF-8';" | docker exec -i $SERVER mongod
echo "\l" | docker exec -i $SERVER use $DB
