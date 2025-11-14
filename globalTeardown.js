import { exec } from 'child_process';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

export default async function globalTeardown() {
  console.log('\n✅ Tests completed! Generating Playwright HTML report...');

  const reportPath = resolve(__dirname, 'playwright-report', 'index.html');

  // Wait a bit to ensure report is generated
  await new Promise((r) => setTimeout(r, 2000));

  if (fs.existsSync(reportPath)) {
    console.log('🚀 Opening Playwright report automatically...');
    // Force PowerShell to open the report in default browser
    exec(`powershell -Command "Start-Process '${reportPath}'"`);
  } else {
    console.error('❌ Report not found at:', reportPath);
  }
}
