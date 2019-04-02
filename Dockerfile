#node, npm...
FROM node:alpine

#directory for our app
WORKDIR /memdevchat-server

#copy package.json and run npm install
#before the rest of the files, because these
#change less often and docker will cache these steps
COPY package.json package-lock.json ./
RUN npm install
COPY . .

#these dont do anything, but document
#intended mount points
VOLUME /memdevchat-server/src
VOLUME /memdevchat-server/build

#default command to run when container starts
CMD npm start
