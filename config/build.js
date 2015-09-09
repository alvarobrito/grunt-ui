'use strict';

/* global module */

module.exports.tasks = {
    clean: {
        dist: {
            src: ['<%= paths.dist %>']
        }
    },
    browserSync: {
        dist: {
            options: {
                server: '<%= paths.dist %>',
                port: '<%= ports.app %>'
            }
        }
    },
    copy: {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= paths.app %>',
                src: '*.html',
                dest: '<%= paths.dist %>'
            }, {
                expand: true,
                cwd: '<%= paths.app %>/assets',
                src: '**/*',
                dest: '<%= paths.dist %>/assets'
            }, {
                expand: true,
                cwd: '<%= paths.app %>/styles',
                src: 'ie.css',
                dest: '<%= paths.dist %>/styles'
            }]
        }
    },
    sass: {
        dist: {
            src: '<%= paths.app %>/styles/main.scss',
            dest: '<%= paths.dist %>/styles/main.css'
        }
    },
    postcss: {
        dist: {
            src: '<%= paths.dist %>/styles/main.css'
        }
    },    
    stripmq: {
        dist: {
            files: {
                '<%= paths.dist %>/styles/main-ie.css': ['<%= paths.dist %>/styles/main.css']
            }
        }
    },
    'rem-to-px': {
        dist: {
            files: {
                '<%= paths.dist %>/styles/main-ie.css': ['<%= paths.dist %>/styles/main-ie.css']
            }
        }
    },
    svgstore: {
        dist: {
            src: '<%= paths.dist %>/assets/svg/*.svg',
            dest: '<%= paths.dist %>/assets/svg/defs.svg'
        }
    },
    usemin: {
        js: ['<%= paths.dist %>/scripts/*.js'],
        html: ['<%= paths.dist %>/*.html'],
        css: ['<%= paths.dist %>/styles/*.css']
    },
    uglify: {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= paths.dist %>/scripts',
                src: 'index.js',
                dest: '<%= paths.dist %>/scripts'
            }]
        }
    },
    htmlmin: {
        dist: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: [{
                expand: true,
                cwd: '<%= paths.dist %>',
                src: '{,*/}*.html',
                dest: '<%= paths.dist %>'
            }]
        }
    },
    imagemin: {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= paths.dist %>/assets/images',
                src: '{,*/}*.{gif,jpeg,jpg,png}',
                dest: '<%= paths.dist %>/assets/images'
            }]
        }
    },
    svgmin: {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= paths.dist %>/assets/svg',
                src: '{,*/}*.svg',
                dest: '<%= paths.dist %>/assets/svg'
            }]
        }
    }
};
