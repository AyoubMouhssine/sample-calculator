pipeline {
    agent any

    environment {
        SONARQUBE_SCANNER_HOME = "C:\\Sonar\\sonar-scanner" // Adjust the path to your SonarScanner installation
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Provide Git credentials if needed
                    git 'https://github.com/AyoubMouhssine/sample-calculator.git'
                }
            }
        }

        stage('Build and SonarQube Analysis') {
            steps {
                script {
                    // Using Maven as the build tool, adjust as needed
                    bat 'mvn clean verify'

                    withSonarQubeEnv(credentialsId: 'test', installationName: 'SonarQube') {
                        // SonarQube analysis using SonarScanner
                        bat "${SONARQUBE_SCANNER_HOME}\\bin\\sonar-scanner.bat"
                    }
                }
            }
        }
    }
}
