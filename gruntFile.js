
module.exports = function(grunt)
{
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Core tasks
  var tasks = ['coffee', 'jasmine', 'uglify'];

  grunt.initConfig({
    coffee: {
      main: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: '*.coffee',
          dest: 'dist/',
          ext: '.js'
        }]
      },
      specs: {
        files: [{
          expand: true,
          cwd: 'spec/coffeescripts/',
          src: '*.spec.coffee',
          dest: 'spec/javascripts/',
          ext: '.spec.js'
        }]
      }
    },
    jasmine: {
      src: ['dist/autocomplete.js'],
      options: {
        specs: 'spec/javascripts/**/*.spec.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/autocomplete.min.js': 'dist/autocomplete.js'
        }
      }
    },
    watch: {
      files: [
        'src/*',
        'spec/coffeescripts/**/*.spec.coffee'
      ],
      tasks: tasks
    }
  });

  grunt.registerTask('default', tasks);
  grunt.registerTask('travis', ['coffee', 'jasmine']);
};