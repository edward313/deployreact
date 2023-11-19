pipeline {
    agent any
    
    stages {
        
       stage('Build Image') {
            steps { 
                sh 'sudo docker build -t reactimage .'
                sh 'sudo docker container stop My-first-container || echo "this container does not exist"'
                sh 'sudo docker tag reactimage:latest phat/dev:latest'
                sh 'echo y | docker container prune '
            }    
       }
       stage('Deploy') {
            steps {  
                script {
                    sh 'sudo docker container run -d --rm --name My-first-container -p 3001:3000 phat/dev:latest'
                }
            }
       }
    }
}