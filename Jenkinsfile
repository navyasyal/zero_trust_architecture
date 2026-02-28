pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Backend - Install') {
      steps {
        dir('server') {
          bat 'npm install'
        }
      }
    }

    stage('Frontend - Install') {
      steps {
        dir('frontend') {
          bat 'npm install'
        }
      }
    }

    stage('Frontend - Build') {
      steps {
        dir('frontend') {
          bat 'npm run build'
        }
      }
    }
  }

  post {
    success { echo '✅ Build successful' }
    failure { echo '❌ Build failed' }
  }
}