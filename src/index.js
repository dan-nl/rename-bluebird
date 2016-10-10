'use strict';

/**
 * module dependencies
 */
var fs = require( 'fs' );
var Promise = require( 'bluebird' );

/**
 * wraps fs.rename in a bluebird promise
 *
 * @param {string|buffer} old_path
 * @param {string|buffer} new_path
 * @returns {Promise.<string|Error>}
 */
function rename( old_path, new_path ) {
  return new Promise(

    /**
     * @param {Function} resolve
     * @param {Function} reject
     * @returns {undefined}
     */
    function ( resolve, reject ) {
      fs.rename(
        old_path,
        new_path,

        /**
         * @param {Error} [err]
         * @returns {undefined}
         */
        function callback( err ) {
          if ( err ) {
            reject( err );

            return;
          }

          resolve( new_path );
        }
      );
    }
  );
}

module.exports = rename;
