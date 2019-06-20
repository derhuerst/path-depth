'use strict'

const test = require('tape')
const depth = require('./index')

test('throws if invalid argument passed', (t) => {
	t.plan(3)
	t.throws(() => depth())
	t.throws(() => depth(1))
	t.throws(() => depth({}))
})

test('works with absolute paths', (t) => {
	t.plan(2)
	t.strictEqual(depth('/'), 0)
	t.strictEqual(depth('/foo/bar'), 2)
})
test('works with relative paths', (t) => {
	t.plan(4)
	t.strictEqual(depth('.'), 0)
	t.strictEqual(depth('./'), 0)
	t.strictEqual(depth('foo/bar'), 2)
	t.strictEqual(depth('./foo/bar'), 2)
})

test('properly normalizes paths', (t) => {
	t.plan(1)
	t.strictEqual(depth('foo/../bar'), 1)
})

test('works with paths pointing up', (t) => {
	t.plan(2)
	t.strictEqual(depth('../../foo'), -1)
	t.strictEqual(depth('foo/../..'), -1)
})
