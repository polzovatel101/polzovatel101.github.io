/**
 * Created by Илья Яновой on 22.06.2016.
 */
module.exports = function (grunt) {
    //описываем конфигурацию
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), //подгружаем package.json, чтобы использовать его данные

        concat: {  //описываем работу плагина конкатенации
            dist: {
                src: ['js/owl.carousel.min.js', 'js/imagesloaded.pkgd.min.js', 'js/isotope.pkgd.min.js', 'js/script.js'],  // какие файлы конкатенировать
                dest: 'js/script.uglify.js'  // куда класть файл, который получиться после процесса конкатенации
            }
        },

        uglify: {  //описываем работу плагина минификации js - uglify.
            options: {
                stripBanners: true,
                banner: '/* <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n' //комментарий который будет в минифицированном файле.
            },

            build: {
                src: 'js/script.uglify.js',  // какой файл минифицировать
                dest: 'js/script.min.js' // куда класть файл, который получиться после процесса минификации
            }
        },

        cssmin: { //описываем работу плагина минификации и конкатенации css.
            with_banner: {
                options: {
                    banner: '/* My minified CSS */'  //комментарий который будет в output файле.
                },

                files: {
                    'css/style.min.css' : ['css/reset.css', 'css/owl.carousel.min.css', 'css/style.css']   // первая строка - output файл. массив из строк, какие файлы конкатенировать и минифицировать.
                }
            }
        }
    });

    //подгружаем необходимые плагины
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-remove-logging');


    //регистрируем задачу
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']); //задача по умолчанию, просто grunt
};