function defaultTask(cb) {

    const postcss = require('gulp-postcss')
    const gulp = require('gulp')

    return gulp.src('css/main.css')
    // ...
    .pipe(postcss([
      // ...
      require('tailwindcss'),
      require('autoprefixer'),
      // ...
      ]))
    // ...
    .pipe(gulp.dest('build/'))


  cb();
}

exports.default = defaultTask