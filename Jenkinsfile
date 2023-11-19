pipeline {
    agent any
    
    stages {
        
       stage('Build Image') {
            steps { 
                sh 'sudo ls'
                sh 'docker build -t reactimage .'
                sh 'docker container stop My-first-container || echo "this container does not exist"'
                sh 'docker tag reactimage:latest phat/dev:latest'
                sh 'echo y | docker container prune '
            }    
       }
       stage('Deploy') {
            steps {  
                script {
                    sh 'docker container run -d --rm --name My-first-container -p 3001:3000 phat/dev:latest'
                }
            }
       }
    }
}