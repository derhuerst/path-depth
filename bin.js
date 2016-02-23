#!/usr/bin/env node
'use strict'

const getStdin = require('get-stdin')
const depth =    require('./index')

getStdin().then(function (path) {
	process.stdout.write(depth(path).toString() + '\n')
})
