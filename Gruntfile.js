'use strict';

/* global module, require */

module.exports = require('gruntfile')(function(grunt) {

    // Static mapping
    require('jit-grunt')(grunt)({
        pluginsRoot: 'node_modules/grunt-ui/node_modules'
    });

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Non compatible tasks with jit-grunt
    grunt.loadNpmTasks('grunt-usemin');

    // Project settings
    var options = {
        // Package.json
        pkg: grunt.file.readJSON('package.json'),
        // Configurable paths
        paths: {
            app: 'src',
            dist: 'dist',
            server: '.tmp',
            doc: 'doc'
        },
        // Configurable ports
        ports: require('./utils/ports')(grunt)
    };

    // Load grunt configurations automatically
    var configs = require('load-grunt-configs')(grunt, options);

    // Define the configuration for all the tasks
    grunt.initConfig(configs);

    grunt.registerTask('serve', 'Runs server for development', function(target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'browserSync:dist']);
        }
        grunt.task.run([
            'clean:server',
            '_compile:server',
            'browserSync:server',
            'watch'
        ]);
    });

    grunt.registerTask('build', 'Generates the package for distribution', [
        'clean:dist',
        '_compile:dist',
        'usemin'
    ]);

    grunt.registerTask('serve:benchmark', 'Generates documentation and reports', [
        'clean:server',
        'plato:server',
        'browserSync:server',
        'watch'
    ]);

    // Internal tasks
    grunt.registerTask('_review:js', 'Valids the code (internal use only)', [
        'jshint',
        'csslint'
    ]);

    grunt.registerTask('_minify', 'Minifiy the code and assets (internal use only)', [
        'uglify',
        'htmlmin',
        'imagemin'
        //'svgmin'
    ]);

    grunt.registerTask('_compile:dist', 'Build compile process (internal use only)', [
        'sass:dist',
        'postcss:dist',
        '_review:js',
        'copy:dist',
        'svgstore:dist',
        '_minify'
    ]);

    grunt.registerTask('_compile:server', 'Server compile process (internal use only)', [
        'sass:server',
        'postcss:server',
        'stripmq',
        'rem-to-px',
        '_review:js',
        'copy:server',
        'svgstore:server',
        'grunticon'
    ]);

});
