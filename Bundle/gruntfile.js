module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-cache-breaker');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        cachebreaker: {
			dev: {
				options: {
					match: [
						{
							// Pattern    // File to hash
							'script.js': '../../CacheBustingDemo/scripts/Js/script.js',
							'style.css': '../../CacheBustingDemo/scripts/style.css'
						}
					],
					replacement: 'sha1'
				},
				files: {
					src: ['../../CacheBustingDemo/index.html']
				}
			}
		}
    });
    grunt.registerTask('cachebreak', ['cachebreaker']);
}