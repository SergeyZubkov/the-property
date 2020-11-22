var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', function(done) {

    browserSync.init({
        server: "./public"
    });

    gulp.watch(["public/*.html", "public/*.css"]).on('change', browserSync.reload);
});

gulp.task('default', gulp.series('serve'));