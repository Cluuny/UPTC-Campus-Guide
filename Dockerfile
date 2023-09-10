FROM node:alpine3.18

WORKDIR /app
COPY . .
RUN npm install --production
EXPOSE 80

CMD [ "npm", "run", "start" ]