/**
 * @author myqianlan
 * @date 2014年11月6日12:58:32
 */
// gulp   
var gulp = require('gulp');
// sass 
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


var root = "app";
// Compile SASS  

gulp.task('sass', function() {
    gulp.src(root + '/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(sourcemaps.write('./maps',{debug: true}))
        .pipe(gulp.dest(root + '/css'));
});


gulp.task('dev', ['sass'], function() {
    gulp.watch(root + '/scss/**/*.scss', ['sass']);
});

// default   
gulp.task('default', ['dev']);