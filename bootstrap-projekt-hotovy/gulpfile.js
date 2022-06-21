var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglifycss = require('gulp-uglifycss');
var browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
    return gulp.src('scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer('> 1%'))
        .pipe(uglifycss())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('css'))
    ;
});

gulp.task('default', gulp.series('styles', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('scss/**/*.scss', gulp.series('styles'));
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("css/*.css").on('change', browserSync.reload);
    gulp.watch("js/*.js").on('change', browserSync.reload);
}));

