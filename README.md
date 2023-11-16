









#### MySql with docker

```sh
docker pull mysql/mysql-server
```

```sh
docker run -d --restart unless-stopped --name=mysql -p3306:3306 -v mysql-volume:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=password -d mysql/mysql-server
```
##### CREATE USER FOR REMOTE CONNECTION DATABASE ON VPS 
```sh
CREATE USER 'edward'@'%' IDENTIFIED BY 'password';
```

```sh
GRANT ALL PRIVILEGES ON *.* TO 'edward'@'%' WITH GRANT OPTION; 
```


