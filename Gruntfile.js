/**
 * Created by feng on 2016/10/9.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //css_mbo 合并
        css_combo:{
            css:{
                files:[{
                    expand:true,
                    cwd:'src/asset/mbocss',
                    src:'**/*.css',
                    dest:'src/asset/css'
                }]
            }
        },

        //cssmin css压缩
        cssmin:{
            css:{
                files:[{
                    expand:true,
                    cwd:'src/asset/css',
                    src:'**/*.css',
                    dest:'build/asset/css'
                }]
            }
        },

        copy:{
            img:{
                files:[{
                    expand:true,
                    cwd:'src/asset/img',
                    src:'**/*',
                    dest:'build/asset/img'
                }]
            }
        },

        watch:{
            options: {
                livereload: true,
                debounceDelay:1000
            },
            css_mbo:{
                files: ['src/asset/fragment/*.css','src/asset/mbocss/*.css'],
                tasks: ['css_combo']
            },
            css:{
                files: ['src/asset/css/*.css'],
                tasks: ['cssmin']
            },
            img:{
                files:'src/asset/img/**/*',
                tasks:['copy']
            }
        }

    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-css-combo');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['css_combo','cssmin','copy']);
};