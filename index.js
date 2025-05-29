#!/usr/bin/env node

/**
 * bexy - JavaScript sandbox for safely executing code in isolated environments
 * 
 * @module bexy
 */

const { program } = require('commander');
const chalk = require('chalk');
const { version } = require('./package.json');

// Main CLI program
program
  .name('bexy')
  .description('JavaScript sandbox for safely executing code in isolated environments')
  .version(version, '-v, --version', 'output the current version')
  .helpOption('-h, --help', 'display help for command');

// Run command
program
  .command('run <file>')
  .description('Run a JavaScript file in the sandbox')
  .action((file) => {
    console.log(chalk.blue(`Running ${file} in sandbox...`));
    // TODO: Implement sandbox execution
    console.log(chalk.green('Sandbox execution completed'));
  });

// REPL command
program
  .command('repl')
  .description('Start an interactive REPL in the sandbox')
  .action(() => {
    console.log(chalk.blue('Starting sandbox REPL...'));
    // TODO: Implement REPL
    console.log(chalk.green('REPL session ended'));
  });

// Parse command line arguments
program.parse(process.argv);

// Show help if no arguments provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
