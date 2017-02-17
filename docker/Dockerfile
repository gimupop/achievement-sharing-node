FROM centos:centos6

MAINTAINER yanagawa

COPY user.sql /user.sql
COPY my.cnf /my.cnf

RUN yum install -y wget && \
yum -y install http://dev.mysql.com/get/mysql-community-release-el6-5.noarch.rpm && \
yum -y install mysql mysql-devel mysql-server mysql-utilities && \
rm -f /etc/my.conf && \
mv /my.cnf /etc/my.cnf && \
service mysqld start && \
sleep 10s && \
chkconfig mysqld on && \
echo "NETWORKING=yes" > /etc/sysconfig/network && \
mysql < /user.sql

EXPOSE 3306

CMD ["/usr/bin/mysqld_safe"]