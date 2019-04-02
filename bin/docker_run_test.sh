#stop and remove server container if running
docker container stop memdevchat-server
docker container rm memdevchat-server

#run the container with terminal, name it, mount src dir, bind ports
docker run -t -i --name memdevchat-server -v `pwd`/src:/memdevchat-server/src -p 8090:8090 memdevchat-server npm test
