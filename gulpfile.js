var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('default', function() {
  browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("scss/*.scss", ['sass']);
    
    gulp.watch('src/*.*').on('change', browserSync.reload);
    gulp.watch('src/components/*.*').on('change', browserSync.reload);
    gulp.watch('scss/*.*').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("styles"))
        .pipe(browserSync.stream());
});
