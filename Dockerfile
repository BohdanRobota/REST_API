FROM node:16.13.1-alpine3.14

WORKDIR /app

COPY ["package.json", "package-lock.json", "tsconfig.json", ".env", "./"]

RUN npm install

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "dev"]