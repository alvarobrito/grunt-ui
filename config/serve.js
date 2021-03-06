'use strict';

/* global module */

module.exports.tasks = {
    clean: {
        server: {
            src: ['<%= paths.server %>']
        }
    },
    plato: {
        server: {
            files: {
                '<%= paths.server %>': ['<%= paths.app %>/applications/{,**/}*.js']
            }
        }
    },
    browserSync: {
        server: {
            options: {
                watchTask: true,
                server: '<%= paths.server %>',
                port: '<%= ports.app %>'
            },
            bsFiles: {
                src: [
                    '<%= paths.server %>/styles/main.css',
                    '<%= paths.server %>/assets/**/*',
                    '<%= paths.server %>/resources/**/*',
                    '<%= paths.server %>/scripts/*.js',
                    '<%= paths.server %>/*.html',
                    'Gruntfile.js'
                ]
            }
        }
    },
    watch: {
        options: {
            port: '<%= ports.livereload %>',
        },
        gruntfile: {
            files: ['Gruntfile.js']
        },
        js: {
            files: ['<%= paths.app %>/{,**/}*.js'],
            tasks: ['newer:jshint'],
            options: {
                spawn: false
            }
        },
        styles: {
            files: ['<%= paths.app %>/styles/{,*/}*.scss'],
            tasks: ['sass:server', 'postcss:server', 'csslint'],
            options: {
                spawn: false
            }
        },
        assets: {
            files: ['<%= paths.app %>/assets/**/*'],
            tasks: ['newer:copy:server']
        },
        resources: {
            files: ['<%= paths.app %>/resources/**/*'],
            tasks: ['newer:copy:server']
        },
        html: {
            files: ['<%= paths.app %>/*.html'],
            tasks: ['newer:copy:server']
        }
    },
    copy: {
        server: {
            files: [{
                expand: true,
                cwd: '<%= paths.app %>',
                src: '*.html',
                dest: '<%= paths.server %>'
            }, {
                expand: true,
                cwd: '<%= paths.app %>/assets',
                src: '**/*',
                dest: '<%= paths.server %>/assets'
            }, {
                expand: true,
                cwd: '<%= paths.app %>/styles',
                src: 'ie.css',
                dest: '<%= paths.server %>/styles'
            }]
        }
    },
    sass: {
        options: {
            debugInfo: true
        },
        server: {
            src: '<%= paths.app %>/styles/main.scss',
            dest: '<%= paths.server %>/styles/main.css'
        }
    },
    postcss: {
        server: {
            options: {
                map: true,
            },
            src: '<%= paths.server %>/styles/main.css'
        }
    },
    stripmq: {
        server: {
            files: {
                '<%= paths.server %>/styles/main-ie.css': ['<%= paths.server %>/styles/main.css']
            }
        }
    },
    'rem-to-px': {
        server: {
            files: {
                '<%= paths.server %>/styles/main-ie.css': ['<%= paths.server %>/styles/main-ie.css']
            }
        }
    },
    svgstore: {
        server: {
            options: {
                includedemo: true
            },
            src: '<%= paths.server %>/assets/svg/*.svg',
            dest: '<%= paths.server %>/assets/svg/defs.svg'
        }
    }
};
