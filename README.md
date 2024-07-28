# Automation-skill-assesment

You need to run the tests:
 -  Playwright
 -  Playwright Test for VS Code (Test Runner)
 
 Setup Playwright (you only have to run this once):
 
 ```
    npx playwright install
 ```

 Run all tests sequentially:

 ```
    npx playwright test --workers 1
 ```

 Run tests with a certain tag:

 ```
    npx playwright test --grep "@tag"
 ```

 Run test by filename:

 ```
    npx playwright test upload-document.test
 ```

 Run tests on KUBE (NOTE: it is staging by default):

 ```
    npx playwright test
 ```

 Debugging a test:

 ```
   npx playwright test upload-document.test --debug
 ```

 