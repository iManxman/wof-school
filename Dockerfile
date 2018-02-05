FROM ubuntu:latest
RUN mkdir -p /usr/src/notesDocker	
WORKDIR /usr/src/notesDocker
COPY ./notes.js /usr/src/notesDocker
COPY ./package.json /usr/src/notesDocker
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
RUN echo "deb http://repo.mongodb.org/apt/debian jessie/mongodb-org/3.6 main" | tee "/etc/apt/sources.list.d/mongodb-org.list"
RUN apt-get upgrade
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh
RUN apt-get install -y nodejs
RUN apt install -y git
RUN apt-get install -y mongodb-org
RUN npm i -s git+https://github.com/xenbyte/bot-client.git
RUN ls -l
RUN nodejs -v
RUN mongo --version
RUN npm install -g nodemon
RUN npm install
RUN mkdir -p /data/db
RUN mongod --fork --logpath /var/log/mongod.log
#RUN systemctl start mongod.service
CMD ["npm", "start"]
