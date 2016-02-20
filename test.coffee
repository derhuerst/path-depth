d = require './index.js'





module.exports =

	'throws an error if invalid argument passed': (test) ->
		test.throws -> d()
		test.throws -> d 1
		test.throws -> d {}
		test.done()

	'works with absolute paths': (test) ->
		test.strictEqual d('/foo/bar'), 2
		test.strictEqual d('/'), 0
		test.done()

	'works with relative paths': (test) ->
		test.strictEqual d('foo/bar'), 2
		test.strictEqual d('.'), 0
		test.strictEqual d('./'), 0
		test.done()

	'properly normalizes paths': (test) ->
		test.strictEqual d('foo/../bar'), 1
		test.done()

	'works with paths pointing up the hierarchy': (test) ->
		test.strictEqual d('../../bar'), -1
		test.strictEqual d('foo/../..'), -1
		test.done()
