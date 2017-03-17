var gulp = require('gulp');
var lessToScss = require('gulp-less-to-scss');
var sass = require('gulp-sass');

gulp.task('default',function(){
  gulp.src('app/**/*.less')
    .pipe(lessToScss())
    .pipe(gulp.dest('app'));

  gulp.src('spa/**/*.less')
    .pipe(lessToScss())
    .pipe(gulp.dest('spa'));

  gulp.src('*.less')
    .pipe(lessToScss())
    .pipe(gulp.dest('./'));

  gulp.src('dist/**/*.less')
    .pipe(lessToScss())
    .pipe(gulp.dest('component'));
});

gulp.task('sass', function () {
  gulp.src('"./dist/components/**/*.scss"')
    .pipe(sass())
    .pipe(gulp.dest('"./dist/components/**/"'));
});
