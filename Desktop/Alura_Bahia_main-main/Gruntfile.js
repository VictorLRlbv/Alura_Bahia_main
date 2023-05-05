module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
          src: 'src/<%= pkg.name %>.js',
          dest: 'build/<%= pkg.name %>.min.js'
        }
      },
      // cssmin
      cssmin: {
        options: {
          mergeIntoShorthands: false,
          roundingPrecision: -1
        },
        target: {
          files: {
            'output.css': [
                'foo.css', 'bar.css'
            ]
          }
        }
      },
      // jshint
      jshintGeneral: {
        options: {
          curly: true,
          eqeqeq: true,
          eqnull: true,
          browser: true,
          globals: {
            jQuery: true
          },
        },
        uses_defaults: ['dir1/**/*.js', 'dir2/**/*.js'],
        with_overrides: {
          options: {
            curly: false,
            undef: true,
          },
          files: {
            src: [
                'dist/js/filtraPreco.js',
                'dist/js/setPreco.js',
            ]
          },
        }
      },
      jshintAccount: {
        options: {
          curly: true,
          eqeqeq: true,
          eqnull: true,
          browser: true,
          globals: {
            jQuery: true
          },
        },
        uses_defaults: ['dir1/**/*.js', 'dir2/**/*.js'],
        with_overrides: {
          options: {
            curly: false,
            undef: true,
          },
          files: {
            src: [
                'dist/js/Cadastro/cadastraConta.js',
                'dist/js/Cadastro/view/contaView.js',
                'dist/js/Cadastro/controllers/contaController.js',
                'dist/js/Cadastro/models/conta.js',
                'dist/js/Cadastro/models/contas.js'
            ]
          },
        }
      },
    });
      
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
  
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin', 'jshintAccount', 'jshintGeneral']);
  
  };