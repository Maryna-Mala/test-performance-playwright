# Performance testing using [Playwright](https://playwright.dev/)

## About the Tool

This project contains Playwright test scripts tailored to assess the web performance of [Idealist Coffee](https://idealistcoffee.com/). Playwright Test was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox.

The primary goal of the project is to provide a baseline for evaluating Playwright's capabilities in handling parallel test execution.

## How to Setup

1. **Clone the Repository**

    Clone the project repository to your local machine using the following command:

    `https://github.com/Maryna-Mala/test-performance-playwright`

2. **Navigate to the Project Directory**

    Change your current directory to the project folder

3. **Install Dependencies**

    Ensure you have Node.js installed on your system. Then, install the necessary dependencies by running:

    `yarn install`

Ensure Google Chrome is installed for the test execution involving web browser. If not, follow the instructions below:

4. **Install Google Chrome**

    Choose the appropriate OS and donwload Google Chrome from here `https://support.google.com/chrome/answer/95346?hl=en&co=GENIE.Platform%3DAndroid`


## How to run

To execute the test cases in the Plaiwrigh project using headless mode, follow these instructions:


1. **Run Tests in Headless Mode**

    You can run tests directly in the terminal without a GUI, which is faster and useful for CI/CD pipelines:

    `yarn test`
    
2. **Run Tests Manually**

    To run tests manually, you can do it straight in the GitHub Actions:

    - Open "Actions" tab
    - In the sidemenu choose "CI/CD Manually" workflow
    - Click on the "Run workflow" and choose the appropriate branch

