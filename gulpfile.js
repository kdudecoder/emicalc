function defaultTask(cb) {

    const postcss = require('gulp-postcss');
    const gulp = require('gulp');
    var csso = require('gulp-csso');
    const purgecss = require('gulp-purgecss');
    

    return gulp.src('css/main.css')
    // ...
    .pipe(postcss([
      // ...
      require('tailwindcss'),
      require('autoprefixer'),
      // ...
      ]))
    // ...
    .pipe(
      purgecss({
        content: ['./index.html'  ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
      })
      )
    .pipe(csso())
    .pipe(gulp.dest('build/'))


  cb();
}

exports.default = defaultTask