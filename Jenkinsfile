pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }

        stage('Archive Report') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
            }
        }

        stage('Send Email') {
            steps {
                mail to: 'recipient@example.com', 
                     subject: 'Playwright Test Report', 
                     body: 'The Playwright test report is attached.', 
                     attachLog: true
            }
        }
    }
}