# rename-bluebird
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][david-dm-image]][david-dm-url] [![Dev Dependency Status][david-dm-dev-image]][david-dm-dev-url] [![NSP Status][nsp-image]][nsp-url]

wraps [`fs.rename`][fs-rename-url] in a bluebird promise

## table of contents
* [installation](#installation)
* [use](#use)
    * [basic](#basic)
* [license](#license)

## installation
```javascript
npm install dan-nl/rename-bluebird
```

## use
### basic
```javascript
var path = require( 'path' );
var rename = require( 'rename-bluebird' );

rename( path.join( __dirname, 'old-dir' ), path.join( __dirname, 'new-dir' ) )
  .then(
    /**
     * @param {string} result the full path of the new directory
     */
    function( result ) {
      // handle result
    }
  )
  .catch(
    function( err ) {
      // handle error
    }
  );
```

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/dan-nl/rename-bluebird/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/dan-nl/rename-bluebird?branch=master
[david-dm-image]: https://david-dm.org/dan-nl/rename-bluebird.svg
[david-dm-url]: https://david-dm.org/dan-nl/rename-bluebird
[david-dm-dev-image]: https://david-dm.org/dan-nl/rename-bluebird/dev-status.svg
[david-dm-dev-url]: https://david-dm.org/dan-nl/rename-bluebird?type=dev
[fs-rename-url]: https://nodejs.org/api/fs.html#fs_fs_rename_oldpath_newpath_callback
[mit-license]: https://raw.githubusercontent.com/dan-nl/rename-bluebird/master/license.txt
[npm-image]: https://img.shields.io/npm/v/rename-bluebird.svg
[npm-url]: https://www.npmjs.com/package/rename-bluebird
[nsp-image]: https://nodesecurity.io/orgs/{organization}/projects/{nsp-project-id}/badge
[nsp-url]: https://nodesecurity.io/orgs/{organization}/projects/{nsp-project-id}
[travis-image]: https://travis-ci.org/dan-nl/rename-bluebird.svg?branch=master
[travis-url]: https://travis-ci.org/dan-nl/rename-bluebird
