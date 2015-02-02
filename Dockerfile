from dockerfile/nodejs

ADD . /usr/src/app
WORKDIR /usr/src/app
RUN npm install --production
EXPOSE 3000
CMD node /usr/src/app/index.js