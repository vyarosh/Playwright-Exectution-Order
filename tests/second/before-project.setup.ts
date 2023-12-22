import { test as setup } from '@playwright/test';
import * as process from "process";
import * as console from "console";

/**
 * Extension point: before Second project tests.
 * Note that there are only 2 ways to pass any artifacts to tests: environment variables and files
 */
setup('Setup Second project', async () => {
  await setup.step('Set env.VAR', async () => {
    process.env.FROM_SETUP='hello';
  });
  await setup.step('One more step', async () => {
    console.log('Before "Second" project');
  });
});
