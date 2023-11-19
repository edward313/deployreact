## Installation (for standard modern project)

#### MySql with docker

```sh
docker pull mysql/mysql-server
```

```sh
docker run -d --restart unless-stopped --name=mysql -p3306:3306 -v mysql-volume:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=password -d mysql/mysql-server
```

##### CREATE USER FOR REMOTE CONNECTION DATABASE ON VPS

```sh
docker exec -it mysql bash
```

```bash
CREATE USER 'edward'@'%' IDENTIFIED BY 'password';
```

```bash
GRANT ALL PRIVILEGES ON *.* TO 'edward'@'%' WITH GRANT OPTION;
```

##Setup CICD server

Jenkin

```ssh
docker run --name jenkinsCi -p 8080:8080 -d -p 50000:50000  --restart=on-failure -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts-jdk11
```

```ssh
docker container run --name edward-jenkins -d -p 8081:8080 --privileged -p 5000:5000 -v /var/run/docker.sock:/var/run/docker.sock -v jenkins_home:/var/jenkins_home --group-add $(stat -c '%g' /var/run/docker.sock) khaliddinh/jenkins
```

##### Get password jenkins

```ssh
docker exec jenkinsCi cat /var/jenkins_home/secrets/initialAdminPassword
```
