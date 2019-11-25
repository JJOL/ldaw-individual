FROM golang:latest

RUN apt-get -yqq update
RUN apt-get -yqq upgrade

WORKDIR /go/src/app
COPY . .

#Publicar Puerto
EXPOSE 80

CMD bash