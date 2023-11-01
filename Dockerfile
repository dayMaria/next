FROM node:14-alpine
ENV http_proxy http://192.168.205.251:3128
ENV https_proxy http://192.168.205.251:3128
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]