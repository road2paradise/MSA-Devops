[![Build Status](https://dev.azure.com/kennggg/MSA-Devops/_apis/build/status/road2paradise.MSA-Devops?branchName=master)](https://dev.azure.com/kennggg/MSA-Devops/_build/latest?definitionId=1&branchName=master)

# MSA-Devops 2020.

[Link](https://kenny-devops-2020-07.azurewebsites.net/ ) to the deployed webapp. 

I have created my pipeline(s) to only execute upon approval by the *resource owner*.

A `build status` can be seen on the top of the README.md file that shows the status of the build pipelines on Azure.


## Build Pipeline

My build pipeline executes upon any changes to the `develop` and `master` branches. This also ignores any commits to either branches if the changes are only on the README.md file.

1. Installs Node.js 
2. Runs npm install and npm build 
3. Saves the build as an artifact as a zip.


## Release Pipeline

My release pipeline executes upon any changes to the `master` branch.

When artifacts are created from the build-pipeline triggered by changes to the `master` branch, it is then continuously deployed as a web app.


