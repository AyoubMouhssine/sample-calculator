node {
  stage('SCM') {
    git 'https://github.com/AyoubMouhssine/sample-calculator.git'
  }
  stage('SonarQube analysis') {
    withSonarQubeEnv(credentialsId: 'test', installationName: 'SonarQube') { // You can override the credential to be used
      sh 'mvn org.sonarsource.scanner.maven:sonar-maven-plugin:3.7.0.1746:sonar'
    }
  }
}
