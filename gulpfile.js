var gulp       = require('gulp')
var browserify = require('gulp-browserify')

// Use NODE_ENV=production in production # process.env.NODE_ENV = 'production'

gulp.task('default', function () {
  gulp.src('./src/*.js')
    .pipe(browserify({ transform: ['vueify', 'babelify', 'aliasify'] }))
    .pipe(gulp.dest('./public'))
})
