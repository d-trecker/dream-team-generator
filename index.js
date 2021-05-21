const inquirer =  require('inquirer');
const fs = require('fs');
const pageTemplate = require('./src/page-template.js');
const path = require('path');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

