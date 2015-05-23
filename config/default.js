'use strict';

/* global require, module */
var jshintStylish = require('jshint-stylish');

module.exports.tasks = {
    jshint: {
        options: {
            jshintrc: '.jshintrc',
            reporter: jshintStylish
        },
        all: ['Gruntfile.js', '<%= paths.app %>/{,**/}*.js']
    },
    jscs: {
        options: {
            config: '.jscsrc',
            verbose: true // If you need output with rule names http://jscs.info/overview.html#verbose
        },
        src: '<%= paths.app %>/{,**/}*.js',
    },
    csslint: {
        options: {
            csslintrc: '.csslintrc'
        },
        src: ['<%= paths.server %>/styles/{,**/}*.css']
    },
    autoprefixer: {
        options: {
            browsers: ['last 2 version', 'ie 9']
        },
    },
    sass: {
        options: {
            includePaths: ['bower_components']
        }
    }
};