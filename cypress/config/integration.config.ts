import { defineConfig } from 'cypress';
import { readTxtFile } from '../support/tasks';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080/task.html',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/integration/**',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on('task', {
        readTxtFile
      });

      return config;
    }
  }
});
