import type { PlaywrightTestConfig } from '@playwright/test';
import * as dotenv from 'dotenv';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
dotenv.config();
dotenv.config({ path: '.env.local' });

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 5 * 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: false,
  retries: 0,
  workers: 1,
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: './playwright-report' }],
  ],

  globalSetup: './global-setup',
  globalTeardown: './global-teardown',
  projects: [
    {
      name: 'Simple',
      testMatch: 'tests/**/*.spec.ts',
      testIgnore: 'tests/complex/*.ts',
    },
    {
      name: 'Demo Setup',
      testMatch: 'tests/second/before-project.setup.ts',
    },
    {
      name: 'Second',
      dependencies: ['Demo Setup'],
      testMatch: 'tests/second/*.spec.ts',
      retries: 0,
    },
  ],
};

export default config;
