# Purpose
This repo contains example of integrating [Testcafe Jenkins reporter](https://github.com/wentwrong/testcafe-reporter-jenkins) with [Jenkins Testcafe plugin](https://github.com/wentwrong/testcafe-jenkins-plugin).

Jenkinsfile contains code that run tests in parallel distributed among two agents (windows and linux machine). After test execution, testcafe will generate artifacts (screenshots for failed tests and video); Testcafe Plugin for Jenkins will aggregates the artifacts and will show them on test page.

# Reproduction
## Requirements
- Jenkins with [Jenkins Testcafe plugin](https://github.com/wentwrong/testcafe-jenkins-plugin) and Declarative Pipeline >= 1.2 (for parallel) 
- two agents with installed on them:
  - nodejs and npm
  - git
  - firefox browser
## Steps
**1. Create new Pipeline project in Jenkins**

**2. Choose "Pipeline script from SCM" and type link to this repo**

![pipelineFromSCM](https://user-images.githubusercontent.com/26363017/81807381-9e93be80-9526-11ea-89b1-56a071672936.png)

**3. Build**

![build](https://user-images.githubusercontent.com/26363017/81807549-f7fbed80-9526-11ea-9672-6b8914896ea2.png)

**4. View attachments on test page**

![attachmentOnTestPage](https://user-images.githubusercontent.com/26363017/81807705-3abdc580-9527-11ea-896d-c36c9659f553.png)
