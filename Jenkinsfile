pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Node Version') {
      steps {
        bat 'node -v'
        bat 'npm -v'
      }
    }

    stage('Install') {
      steps {
        bat 'npm install'
      }
    }

    stage('Test') {
      steps {
        bat 'echo Skipping tests'
      }
    }
  }

  post {
    success { echo '✅ SUCCESS' }
    failure { echo '❌ FAILURE' }
  }
}