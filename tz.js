const moment = require('moment-timezone');

moment.tz.setDefault('America/Los_Angeles');

const yargs = require('yargs');

// set default values for the command
let targetTimezone = 'Asia/Kolkata'; // default value to run program
let targetFormat = ''; // default format is ISO 8601
// command set up
const command = yargs.argv._[0];
const params = yargs.argv;
// set the timezone and format if provided
if (params.targetTimezone) {
  targetTimezone = params.targetTimezone;
}
if (params.format) {
  targetFormat = 'dddd, MMMM Do YYYY, h:mm:ss a';
}
if (command === 'timezone') {
  console.log(`The time at the ${targetTimezone} timezone is ${moment().tz(targetTimezone).format(targetFormat)}`);
} else {
  console.log('Usage: node <script-file> <timezone>');
  process.exit(1);
}
