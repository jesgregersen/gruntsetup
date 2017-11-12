module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        connect: {
            server: {
                options: {
                    port: 8200,
                    base: 'public',
                    logger: 'dev',
                    hostname: 'localhost',
                    keepalive: true
                }
            }
        },
        less : {
            dist : {
                files : {
                    'public/css/basic.css' : 'less/main.less'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-less');
    
    // Default task(s).
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('lesser', ['less']);
    grunt.registerTask('connect', function() {
        grunt.log.write('Booting up...'),
        'connect'
    });
   
};