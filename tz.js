const moment = require('moment-timezone');

moment.tz.setDefault('America/Los_Angeles');

const yargs = require('yargs');

let targetTimezone;
const command = yargs.argv._[0];
const params = yargs.argv;

if (command === 'timezone') {
  if (params.targetTimezone && params.format) {
    console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format()}`);
  }
} else {
  console.log('Usage: node <script-file> <timezone>');
  process.exit(1);
}

// let targetTimezone;
/* if (yargs.argv.length !== 3) {
  console.log('Usage: node <script-file> <timezone>');
  process.exit(1);
} else {
  targetTimezone = yargs.argv._[2];
}

 console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format()}`);
*/
