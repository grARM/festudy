/**
 * lib/reporters/default.js - gulp-jslint
 * Copyright (C) 2014-2016 Karim Alibhai.
 */

'use strict';

var chalk = require('chalk'),
    path = require('path');

module.exports = function ( test ) {
    // explicitly convert boolean
    var errorsOnly = test.errorsOnly === true;

    return function ( results ) {
        // print the filename and status of the linting
        if (results.success) {
            if (!errorsOnly) {
                test.complete(results.filename);
                console.log(chalk.green(' ✓ %s'), path.basename(results.filename));
            }
        } else {
            test.todo(results.filename);
            console.log(chalk.red(' ✖ %s'), path.basename(results.filename));
        }

        // just print
        results.errors.forEach(function (res) {
            console.log(chalk.red('   ✖ %s:%s: %s'), res.line, res.column, res.message);
        });
    };
};
