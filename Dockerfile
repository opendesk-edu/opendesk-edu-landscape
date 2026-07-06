FROM nginx:alpine

COPY index.html styles.css script.js CNAME /usr/share/nginx/html/
COPY data/ /usr/share/nginx/html/data/

EXPOSE 80
