pipeline {
    agent any
    tools {nodejs "my-nodejs"}
    stages {
        stage('Install Dependencies') {
            steps {
                nodejs("my-nodejs") {
                    sh 'npm install'
                }
            }
        }

        stage('Run Lint') {
            steps {
                nodejs("my-nodejs") {
                    sh 'npm run lint' // Add this step if you have a linting script
                }
            }
        }

        stage('Run Tests') {
            steps {
                nodejs("my-nodejs") {
                    sh 'npm test'
                }
            }
        }
    }
}