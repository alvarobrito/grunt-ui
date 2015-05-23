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

    grunt.registerTask('dist', 'Create distribution', [
        '_package'
    ]);

    grunt.registerTask('serve:benchmark', 'Generates documentation and reports', [
        'clean:server',
        'plato:server',
        'browserSync:server',
        'watch'
    ]);

    // Internal tasks
    grunt.registerTask('_review:js', 'Internal use only', [
        'jshint',
        'jscs',
        'csslint'
    ]);
    grunt.registerTask('_minify', 'Internal use only', [
        'uglify',
        'htmlmin',
        'cssmin',
        'imagemin',
        'svgmin'
    ]);

    grunt.registerTask('_compile:dist', 'Internal use only', [
        'sass:dist',
        'autoprefixer:dist',
        '_review:js',
        'copy:dist',
        '_minify'
    ]);

    grunt.registerTask('_compile:server', 'Internal use only', [
        'sass:server',
        'autoprefixer:server',
        '_review:js',
        'copy:server'
    ]);

});
