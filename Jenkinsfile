pipeline {
    agent none
    
    stages {
        stage('Run tests') {
            parallel {
                stage('Test on windows') {
                    agent { label 'w1nd0ws' }

                    steps {
                        bat 'npm install'
                        bat 'npm test'
                    }
                
                    post {
                        always {
                            junit keepLongStdio: true, 
                                  testDataPublishers: [[$class: 'TestcafePublisher']], 
                                  testResults: 'res.xml'
                        }
                    }
                }

                stage('Test on linux') {
                    agent { label 'deb1an' }

                    steps {
                        sh 'npm install'
                        sh 'npm test'
                    }

                    post {
                        always {
                            junit keepLongStdio: true, 
                                  testDataPublishers: [[$class: 'TestcafePublisher']], 
                                  testResults: 'res.xml'
                        }
                    }
                }
            }   
        }
    }
}
