var grunt = require("grunt");
var config = require('./gruntfile.js');
config(grunt);
//grunt.tasks(['cacheBuster']);
grunt.tasks(['cachebreak']);