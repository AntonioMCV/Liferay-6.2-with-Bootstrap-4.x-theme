'use strict';

var gulp = require('gulp');
var liferayThemeTasks = require('liferay-theme-tasks');
 
liferayThemeTasks.registerTasks({
	gulp: gulp,
	hookFn: function(gulp) {

		gulp.hook('before:build:src', function(done) {

			gulp.src('node_modules/bootstrap/*')
			.pipe(gulp.dest('src/css/bootstrap/'));
			console.log('bootstrap4 copied');
		});
	}
});
