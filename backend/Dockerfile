FROM node:16.14-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run" ]

CMD [ "dev" ]
