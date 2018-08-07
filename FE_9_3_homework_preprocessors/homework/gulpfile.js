var gulp = require("gulp");
var styles = require("gulp-scss");
var sourcemaps = require("gulp-sourcemaps");

gulp.task('style', function() {
    return gulp.src("../homework/scss/style*.scss")
    .pipe(sourcemaps.init())
    .pipe(styles())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../homework/css/'));
});
