import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests/browser",
  fullyParallel: false,
  workers: 1,
  timeout: 60000,
  use: { baseURL: "http://127.0.0.1:3100", trace: "retain-on-failure" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "node --import tsx scripts/test-server.mts",
    url: "http://127.0.0.1:3100/en/login",
    reuseExistingServer: false,
    timeout: 120000,
  },
});
