# first stage of building angular image docker
FROM node:16.18.0-alpine3.16 as build
RUN mkdir /app
RUN mkdir /apptest

WORKDIR /app

COPY  package.json /app/
RUN npm install

COPY . /app/
RUN npm run build --prod

# final stage 
FROM nginx:alpine 
COPY --from=build /app/dist/first-app /usr/share/nginx/html