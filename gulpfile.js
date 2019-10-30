var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest('css'))
});
gulp.task('dzien2', function (done) {
    console.log("---------- popatrz do chroma----------");
    done();
});

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', gulp.series("sass"));
});