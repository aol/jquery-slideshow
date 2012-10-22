/*global module:false*/
module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:aol-slideshow.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', '<file_strip_banner:src/<%= pkg.name %>.js>'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    min: {
      'photogallery-1.0': {
        //src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        src: ['<banner:meta.banner>', 'src/jquery.aolphotogallery-1.0.js'],
        //dest: 'dist/<%= pkg.name %>.min.js'
        dest: 'dist/jquery.aolphotogallery-1.0.min.js'
      },
      photogallery: {
        //src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        src: ['<banner:meta.banner>', 'src/jquery.aolphotogallery.js'],
        //dest: 'dist/<%= pkg.name %>.min.js'
        dest: 'dist/jquery.aolphotogallery.min.js'
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    lint: {
      //files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
      files: ['grunt.js', 'src/jquery.aolphotogallery.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      options: {
        "curly": true,
        "eqeqeq": true,
        "immed": true,
        "latedef": true,
        "newcap": true,
        "noarg": true,
        "sub": true,
        "undef": true,
        "boss": true,
        "eqnull": true,
        "browser": true,
        "white": true,
        "devel": true,
        "indent": 2,
        "jquery": true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {}
  });

  // Default task.
  //grunt.registerTask('default', 'lint qunit concat min');
  grunt.registerTask('default', 'lint qunit min');

};
