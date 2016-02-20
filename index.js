'use strict'

const path = require('path')



const filterDot = (s) => s !== '.'
const filterEmpty = (s) => s.length > 0
const reduceToLevel = (acc, s) => s === '..' ? acc - 1 : acc + 1

module.exports = (p) =>
	p === '' ? 0 :
	path.normalize(p)
	.split(path.sep)
	.filter(filterDot)
	.filter(filterEmpty)
	.reduce(reduceToLevel, 0)
