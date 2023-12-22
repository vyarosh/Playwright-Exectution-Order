# Playwright Execution Order 
Demo Project to investigate Execution order of the Annotations, Hooks and Listeners

### Install

* Install Node.js 12+ version and make sure npx is included
* Install project dependencies: `npm ci`
* Install "playwright": `npx playwright install`
* Install test module if required: `npm install -D @playwright/test`

### Run tests:
Execute command in the Project Root folder
* run all tests: `npx playwright test`
* run a single test file: `npx playwright test --projet=Simple double.spec.ts`
* run a set of test files: `npx playwright test tests/simple/ tests/second/`
* run files that have **my-spec** or **my-spec-2** in the file name: `npx playwright test --project=Complex my-spec my-spec-2`
* run desired groups/tags ([see official doc](https://playwright.dev/docs/test-cli)): `npx playwright test --grep @slow`

### Test report
Execute command in the **playwright-tests** folder: `npx playwright show-report`


## **Useful Command Line Arguments:**
Full list of arguments available on [Playwright docs](https://playwright.dev/docs/test-cli#reference)

`--config="playwright.config.ts"` runs tests with specified configuration file. Another way to select tests to run with targeted setup and teardown, ex:

    `npx playwright test --config=local.config.ts`

`--quiet`  Run tests with no console output, ex:

    `npx playwright test --project=Simple --quiet`

`--debug`  Run tests with Playwright Inspector, ex:

    `npx playwright test --debug`

`--pass-with-no-tests`  Allows the test suite to pass when no files are found.


`--grep="@tag"` runs only tests marked by specified tags. The following tags are available:

