#!/bin/bash
echo "Atualizando o servidor..."
apt-get update
apt-get upgrade -y

echo "Baixando e copiando os arquivos da Aplicação.."
apt-get install apache2 -y
apt-get install unzip -y
cd /tmp
wget https://github.com/denilsonbonatti/linux-site-dio/archive/refs/heads/main.zip
unzip main.zip
cd linux-site-dio
cp -R * /var/www/html/


