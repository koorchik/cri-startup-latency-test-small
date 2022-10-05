FROM node:18-alpine

RUN mkdir /app
WORKDIR /app

COPY . .
RUN npm install

EXPOSE 8080
CMD npm start