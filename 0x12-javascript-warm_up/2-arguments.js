#!/usr/bin/node
if (process.argv && process.argv.length > 2) {
    console.log('Arguments found');
  } else if (process.argv && process.argv.length === 3) {
    console.log('Argument found');
  } else {
    console.log('No argument');
  }