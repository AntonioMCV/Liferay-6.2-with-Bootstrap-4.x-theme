'use strict';

var gulp = require('gulp');
var liferayThemeTasks = require('liferay-theme-tasks');
 
liferayThemeTasks.registerTasks({
	gulp: gulp,
	hookFn: function(gulp) {

		gulp.hook('before:build', function(done) {

			gulp.src('node_modules/bootstrap/scss/**/*')
			.pipe(gulp.dest('src/css/bootstrap/'))
			.on('end', done);
		});
	}
});