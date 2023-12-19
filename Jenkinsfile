pipeline {
    agent none
    stages {
        stage("Build & SonarQube Scanner") {
            agent {
                label 'sonar'
            }
            steps {
                withSonarQubeEnv('sonar') {
                    script {
                        bat 'mvn clean package sonar:sonar'
                    }
                }
            }
        }
    }
}
