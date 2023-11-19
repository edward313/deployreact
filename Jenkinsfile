pipeline {
    agent any
    
    stages {
        
       stage('Build Image') {
            steps { 
                sh 'docker build -t microedu .'
                sh 'docker container stop micro-edu || echo "this container does not exist"'
                sh 'docker tag microedu:latest phat/dev:latest'
                // sh 'echo y | docker container prune '
            }    
       }
       stage('Deploy') {
            steps {  
                script {
                    sh 'docker container run -d --rm --name micro-edu -p 3001:3000 phat/dev:latest'
                }
            }
       }
    }
}