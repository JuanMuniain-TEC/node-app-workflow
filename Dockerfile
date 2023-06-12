FROM node:alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY A01781341/ ./

EXPOSE 3000

CMD ["node", "index.js"]