FROM node:alpine

WORKDIR /A01781341

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]