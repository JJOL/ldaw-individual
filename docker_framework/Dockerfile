FROM golang:latest

RUN apt-get -yqq update
RUN apt-get -yqq upgrade

WORKDIR /my_home
RUN git clone https://github.com/JJOL/go-gin-start.git
WORKDIR /my_home/go-gin-start

CMD ["go", "run", "main.go"]