#!/usr/bin/env node

import { spawn } from 'child_process';
import os from 'os';

// Determine the platform-specific config file
let configArg = '';
const platform = os.platform();

if (platform === 'win32') {
  configArg = '--config src-tauri/tauri.windows.conf.json';
} else if (platform === 'linux') {
  configArg = '--config src-tauri/tauri.linux.conf.json';
}

// Build the command
const args = ['@tauri-apps/cli', 'dev'];
if (configArg) {
  args.push(configArg);
}

// Spawn the tauri dev process
const child = spawn('npx', args, {
  stdio: 'inherit',
  shell: true,
  env: process.env
});

child.on('close', (code) => {
  process.exit(code);
});