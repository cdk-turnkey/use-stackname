#!/usr/bin/env node
const stackname = require('@cdk-turnkey/stackname');
console.log(stackname('hi'));
const fs = require('fs');
const pkg = fs.readFileSync('./package.json', 'utf-8');
console.log(pkg);
const ob = JSON.parse(pkg);
console.log(ob.name);
