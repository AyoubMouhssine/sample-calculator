pipeline {
    // ... other pipeline configurations ...

    stages {
        stage('SonarQube analysis') {
            steps {
                script {
                    withSonarQubeEnv(credentialsId: 'test', installationName: 'SonarQube') {
                        // ... your SonarQube analysis steps ...
                        // For example, using Maven:
                        sh './mvnw clean verify sonar:sonar'
                    }
                }
            }
        }
    }
}
