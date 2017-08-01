var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');

var jsFiles = ['./js/script.js', './js/main.js'];

gulp.task('buildJs', function () {
    return gulp.src(jsFiles)
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function () {
    gulp.watch(jsFiles, ['buildJs']),
        gulp.watch(cssFiles, ['buildCss']);
});

//task for css concatenation
var cssFiles = ['./css/style.css', './css/style2.css'];
gulp.task('buildCss', function () {
    return gulp.src(cssFiles)
        .pipe(concat('all.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['buildCss', 'buildJs']);