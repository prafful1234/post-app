FROM node:latest
# Copy and build server
COPY . /home/craft/angular-starter
WORKDIR /home/craft/
RUN cd angular-starter \
    && npm install \
    && npm run build -- --prod

FROM nginx:latest

COPY --from=0 /home/craft/angular-starter/dist/angular-starter /var/www/html
COPY ./docker/nginx-default.conf.template /etc/nginx/conf.d/default.conf.template
COPY ./docker/docker-entrypoint.sh /

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
