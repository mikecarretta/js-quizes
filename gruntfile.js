module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*\n' +
            '  <%= pkg.name %> site v<%= pkg.version %>\n' +
            '  <%= pkg.license %> License\n' +
            '  Created by <%= pkg.author %> using Flat Bootstrap 3.1\n' +
            '*/\n\n',
    uglify: {
      app: {
        options: {
          banner: '<%= banner %>'
        },
        files: {
          'js/app.min.js': 'js/app.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', 'uglify');

};