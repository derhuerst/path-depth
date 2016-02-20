# path-depth

Get the depth of a file/URL path.

```javascript
depth('/a/b/c')    // ->  3
depth('a\..\b\c')  // ->  2
depth('a/./b')     // ->  2
depth('foo/../..') // -> -1
depth('.')         // ->  0
```

[![build status](https://img.shields.io/travis/derhuerst/path-depth.svg)](https://travis-ci.org/derhuerst/path-depth)
[![dependency status](https://img.shields.io/david/derhuerst/path-depth.svg)](https://david-dm.org/derhuerst/path-depth#info=dependencies)
[![dev dependency status](https://img.shields.io/david/dev/derhuerst/path-depth.svg)](https://david-dm.org/derhuerst/path-depth#info=devDependencies)


## Installing

```
npm install path-depth
```


## Usage

```
const depth = require('path-depth')

depth('/foo/bar') // -> 2
```



## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/path-depth/issues).
