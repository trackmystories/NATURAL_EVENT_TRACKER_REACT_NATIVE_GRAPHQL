FROM node:latest

RUN mkdrir -p /app/src

WORKDIR /app/src

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "react-native", "start"]
