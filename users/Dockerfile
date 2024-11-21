FROM node:20-alpine

RUN npm install -g sequelize-cli

WORKDIR /users

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${PORT}

CMD ["npm", "start"]