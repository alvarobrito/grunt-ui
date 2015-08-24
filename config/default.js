'use strict';

/* global require, module */
var autoprefixer = require('autoprefixer-core');
var csswring = require('csswring');
var jshintStylish = require('jshint-stylish');

module.exports.tasks = {
    jshint: {
        options: {
            jshintrc: '.jshintrc',
            reporter: jshintStylish
        },
        all: ['Gruntfile.js', '<%= paths.app %>/{,**/}*.js']
    },
    csslint: {
        options: {
            csslintrc: '.csslintrc'
        },
        src: ['<%= paths.server %>/styles/{,**/}*.css']
    },
    sass: {
        options: {
            includePaths: ['bower_components']
        }
    },
    postcss: {
        options: {
            processors: [
                autoprefixer({
                    browsers: 'last 1 version'
                })
            ]
        }
    },
    stripmq: {
        //Viewport options
        options: {
            width: 1000,
            type: 'screen'
        },
        all: {
            files: {
                '<%= paths.server %>/styles/main-ie.css': ['<%= paths.server %>/styles/main.css']
            }
        }
    },
    'rem-to-px': {
      all: {
        files: {
            '<%= paths.server %>/styles/main-ie.css': ['<%= paths.server %>/styles/main-ie.css']
        }
      }
    },
    grunticon: {
        all: {
            files: [{
                expand: true,
                cwd: '<%=paths.app %>/assets/svg/',
                src: ['*.svg', '*.png'],
                dest: "<%=paths.server %>"
            }],
            options: {
                colors : {
                    gray : "#909090",
                    red: "#ff0000"
                }
            }
        }
    },
    svgstore: {
        options: {
            cleanup: true,
            cleanupdefs: true,
            includedemo: false,
            preserveDescElement: false,
            prefix: 'icon-',
            svg: { // will add and overide the the default xmlns="http://www.w3.org/2000/svg" attribute to the resulting SVG
                viewBox: '0 0 100 100',
                xmlns: 'http://www.w3.org/2000/svg',
                'xmlns:xlink': 'http://www.w3.org/1999/xlink'
            }
        }
    }
};
