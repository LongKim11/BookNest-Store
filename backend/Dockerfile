FROM node:20.12.2

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8092

CMD ["npm", "start"]
