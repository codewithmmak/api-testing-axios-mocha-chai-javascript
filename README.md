---
# API Automation using Axios, Mocha, Chai and JavaScript Setup Guide
---

## Getting started

### Pre-requisites
* Download and install Node.js
* Download and install any Text Editor like Visual Code/Sublime/Brackets

### Setup Visual Code
* Install GitLens Extension from the Marketplace: `GitLens — Git supercharged by GitKraken`
* Install vscode-icons from the Marketplace: `vscode-icons`
* Go to Visual Code Preference > Setting and search `formatOnSave` and enable/ON it.

### Setup Scripts 
* Clone the repository into a folder
* Go to Project root directory and install Dependency: `npm install`
* All the dependencies from package.json would be installed in node_modules folder.

### How to write Test
* Add new test under `api-tests` folder
* Name the file as <testname>.js (e.g. get_request.js)

### How to Run Test
* Go to Project root directory and run command: `npm test`
* If you want to run api tests then run command: `npx mocha --recursive api-tests/*.js --timeout 10000 --reporter mochawesome`

### How to Update local npm packages
* Go to Project root directory and run command: `npm update`

### How to view HTML report
* Go to Project root directory: `./mochawesome-report/mochawesome.html`

### Sample Test Results
![API Automation using Axios, Mocha, Chai and JavaScript Test Report](./assets/test-results.png?raw=true "API Automation using Axios, Mocha, Chai and JavaScript Test Report")

![API Automation using Axios, Mocha, Chai and JavaScript Test Report Detailed View](./assets/test-results-detailed-view.png?raw=true "API Automation using Axios, Mocha, Chai and JavaScript Test Report Detailed View")
