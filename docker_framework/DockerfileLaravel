#Image base desde la cual partimos
FROM ubuntu

RUN apt-get -yqq update
RUN apt-get -yqq upgrade

# Agregar Repo PHP
RUN apt-get -yqq install software-properties-common
RUN add-apt-repository ppa:ondrej/php
RUN apt-get -yqq update

#Instalar PHP
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get -yqq install php7.3

RUN apt-get -yqq install php-pear php7.3-curl php7.3-dev php7.3-gd php7.3-mbstring php7.3-zip php7.3-mysql php7.3-xml php7.3-json

RUN apt-get -yqq install apache2


#Install Composer
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php -r "if (hash_file('sha384', 'composer-setup.php') === 'a5c698ffe4b8e849a443b120cd5ba38043260d5c4023dbf93e1558871f1f07f58274fc6f4c93bcfd858c6bd0775cd8d1') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN php composer-setup.php
RUN php -r "unlink('composer-setup.php');"
RUN mv composer.phar /usr/local/bin/composer

#Install Lavarel
RUN composer global require "laravel/installer=~1.1"
ENV PATH="${PATH}:/root/.composer/vendor/bin"

#Publicar Puerto
EXPOSE 80

CMD /root
CMD laravel new blog && bash


#CMD service apache2 start && bash