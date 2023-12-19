pipeline {
        agent none
        stages {
         
          stage("build & SonarQube Scanner") {
            agent any
            steps {
              withSonarQubeEnv('sonar') {
                bat 'mvn clean package sonar:sonar'
              }
            }
          }
        }
      }
