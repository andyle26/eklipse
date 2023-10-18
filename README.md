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
https://github.com/andyle26/eklipse.git
```

2. Navigate to folder and install npm packages using:

```sh
npm install
```

<!-- USAGE EXAMPLES-->

## Usage

1. For Browser Configuration, change required parameters in `playwright.config.ts`.
2. For execution entire test suite on all available browsers simultaneously execute below command, `Test Cases are present in "tests" folder`:

```JS
npm run test
```

3. For executing single test case file on Chrome browser execute the below command,

```JS
npm run test login
```

## CI

1. Install Jenkins in local machine
2. Config Jenkins with jenkinsfile
