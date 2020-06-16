pipeline {
    agent none
    
    stages {
        stage('Run E2E tests') {
            parallel {
                stage('Test on windows') {
                    agent { label 'w1nd0ws' }

                    steps {
                        bat 'npm install'
                        bat 'npm run test-e2e'
                    }
                
                    post {
                        always {
                            junit keepLongStdio: true, 
                                  testDataPublishers: [[$class: 'TestCafePublisher']], 
                                  testResults: '*.xml'
                        }
                    }
                }

                stage('Test on linux') {
                    agent { label 'deb1an' }

                    steps {
                        sh 'npm install'
                        sh 'npm run test-e2e'
                    }

                    post {
                        always {
                            junit keepLongStdio: true, 
                                  testDataPublishers: [[$class: 'TestCafePublisher']], 
                                  testResults: '*.xml'
                        }
                    }
                }
            }   
        }
    }
}
