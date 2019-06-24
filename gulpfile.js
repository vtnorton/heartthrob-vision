let gulp = require('gulp')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var minifyjs = require('gulp-js-minify')

gulp.task('minify-js', () => {
	return gulp.src('src/js/*.js')
		.pipe(concat('vision.heartthrob.js'))
		.pipe(rename('vision.heartthrob.min.js'))
		.pipe(minifyjs())
		.pipe(gulp.dest('build/js'))
})

gulp.task('copy-files-img', () => {
	return gulp.src('src/img/**')
		.pipe(gulp.dest('build/img'))
})

gulp.task('copy-files-js', () => {
	return gulp.src('src/js/vision.heartthrob.js')
		.pipe(gulp.dest('build/js'))
})

gulp.task('build', gulp.parallel('minify-js', 'copy-files-js', 'copy-files-img'))
gulp.task('default', gulp.parallel('build'))
