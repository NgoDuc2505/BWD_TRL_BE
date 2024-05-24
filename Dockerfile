FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json  ./

RUN npm ci

COPY . .
RUN npx prisma init
RUN npx prisma db pull
RUN npx prisma generate
RUN npm run build

EXPOSE 3000/tcp

CMD [ "node", "dist/main.js" ]