FROM nginx:alpine

EXPOSE 8890
COPY dist/ /var/www/
COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]