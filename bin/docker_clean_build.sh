echo "Stopping existing memdevchat-server container (if any)..."
docker container stop memdevchat-server
echo "Removing existing memdevchat-server container (if any)..."
docker container rm memdevchat-server
echo "Removing memdevchat-server image (if any)..."
docker image rm memdevchat-server
echo "Building Dockerfile.dev image with tag 'memdevchat-server'..."
docker build -f Dockerfile -t memdevchat-server .
