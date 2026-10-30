// @ts-nocheck
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';
import { report } from 'process';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config =({
  testDir: './tests',
  timeout: 40_000,
  expect:{
    timeout:40*10
  },
  reporter: 'html',
  
  use: {
  
  browserName: 'chromium',
  headless: false,
  Screenshot:'on',
  trace:'retain-on-failure',
 },


 
});

 module.exports = config