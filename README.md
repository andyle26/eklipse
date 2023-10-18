## Built With

- [Playwright](https://playwright.dev)
- [Typescript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

The following software are required:

- nodejs : Download and Install Node JS from
  ```sh
  https://nodejs.org/en/download/
  ```
- Install Java 8 or above, Allure Reports require Java 8 or higher.
- Install Java 11 instead of Java 8 if you intend to use Jenkins.

### Installation

1. Clone the repo using below URL

```sh
https://gitlab.com/jobhopvn/ikihop/automation-test-ikihop.git
```

2. Navigate to folder and install npm packages using:

```sh
npm install
```

<!-- USAGE EXAMPLES-->

## Usage

1. For Browser Configuration, change required parameters in `playwright.config.ts`.
2. For execution entire test suite on all available browsers simultaneously execute below command where "ENV" can be "qa" or "dev", `Test Cases are present in "tests" folder`:

```JS
npm run test:clean && npx cross-env MODE=testAll npx playwright test --workers=10
```

3. For executing portal test case on Chrome browser execute the below command,

```JS
npm run test:portal
```

4. For executing web responsive test case on Chrome browser execute the below command,

```JS
npm run test:webr
```

10. For Allure Report generation execute :

```JS
npx allure generate --clean allure-results && npx allure open
```

## Reports

- <b>Overall Report</b>
  ![Overall Report Screenshot][overall-report-screenshot]

- <b>Detailed Report</b>
  ![Detailed Report Screenshot][detailed-report-screenshot]

- <b>Failure Report</b>
  ![Failure Report Screenshot][failure-report-screenshot]

## SonarQube

Undefined

## Docker
  
Undefined


<!-- MARKDOWN LINKS & IMAGES -->

[overall-report-screenshot]: ReadMeImages/OverallReport.PNG
[detailed-report-screenshot]: ReadMeImages/DetailedReport.PNG
[failure-report-screenshot]: ReadMeImages/FailureReport.PNG
[sonar-report-screenshot]: ReadMeImages/SonarReport.PNG

## References
- Page selectors: https://playwright.dev/docs/selectors