FROM node:latest

WORKDIR /usr/app

COPY ./backend/package.json .

RUN npm install

COPY ./backend .

EXPOSE 3000

CMD [ "npm", "start" ]