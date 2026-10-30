// @ts-nocheck
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'console';
import { report } from 'process';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config =({
  testDir: './tests',
  retries: 1,
  fullyParallel: true,
  timeout: 40_000,
  expect:{
    timeout:40*10
  },
  reporter: 'html',
  
  projects: [

    {
      name:'Safari',
 use: {
  
  browserName: 'webkit',
  headless: false,
  Screenshot:'on',
  trace:'retain-on-failure',
  permissions:['geolocation'],
  IgnoreHTTPSErrors:true,
  video:'retain-on-failure',
  geolocation:{latitude: 12.9716, longitude: 77.5946},
  ...devices['iPhone 11'],
 },
    },

    {
      name:'Chrome',
      use:{
        name:'chromium',
        headless: false,
        Screenshot:'on',
        trace:'retain-on-failure',
        // viewport:{width: 720, height: 720},
        // video:'retain-on-failure',
      }
    
    }
  ]
 


 
});

 module.exports = config