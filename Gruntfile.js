module.exports = function(grunt) {

  grunt.initConfig({

      pkg: grunt.file.readJSON('package.json'),


      //SASS TASKS
      sass: {
        dev: {
          options: {
            style: 'expanded',
            sourcemap: 'none',
          },
          files: {
            'compiled/style.css': 'sass/style.scss'
          }
        },
        dist: {
          options: {
            style: 'compressed',
            sourcemap: 'none',
          },
          files: {
            'compiled/style-min.css': 'sass/style.scss'
          }
        }
      },


      // WATCH TASK
      watch: {
        css: {
          files: '**/*.scss',
          tasks: ['sass']
        }
      }

  });

  //LOAD TASKS
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // REGISTER TASKS

  grunt.registerTask('default', ['watch']);

}
