const del = require('del');
const gulp = require('gulp');
const minifyCSS = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const sftp = require('gulp-sftp');
const sourcemaps = require('gulp-sourcemaps');

// Gulp Main Tasks:

gulp.task('default', function(callback) {
  runSequence('watch', 'fractal-start', callback);
});

gulp.task('build', function(callback) {
  runSequence('clean', 'sass-build', 'fractal-build', callback);
});

gulp.task('deploy', function(callback) {
  runSequence('build', 'upload', callback);
});

// Fractal to Gulp Integration:

const fractal = require('./fractal.js');

const logger = fractal.cli.console; // keep a reference to the fractal CLI console utility

gulp.task('fractal-start', function(){
  const server = fractal.web.server({
    sync: true
  });
  server.on('error', err => logger.error(err.message));
  return server.start().then(() => {
    logger.success(`Fractal's BrowserSync is now running at the external network URL`);
  });
});

gulp.task('fractal-build', function(){
  const builder = fractal.web.builder();
  builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
  builder.on('error', err => logger.error(err.message));
  return builder.build().then(() => {
    logger.success('Fractal build completed');
  });
});

// Gulp Tasks:

gulp.task('clean', function() {
  return del(['./dist', './static/css/sourcemaps']);
})

gulp.task('watch', function(){
  gulp.watch('./scss/*.scss', ['sass-watch', 'scss-lint']);
});

gulp.task('sass-watch', function() {
 return gulp.src('./scss/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss())
  .pipe(sourcemaps.write('sourcemaps'))
  .pipe(gulp.dest('./static/css'));
});

gulp.task('sass-build', function() {
 return gulp.src('./scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss())
  .pipe(minifyCSS())
  .pipe(gulp.dest('./static/css'));
});

gulp.task('scss-lint', function() {
  return gulp.src('./scss/*.scss')
    .pipe(sassLint({
      configFile: 'sass-lint-config.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('upload', function () {
  return gulp.src('dist/**')
    .pipe(sftp({
      host: 'webprod.cdlib.org',
      remotePath: '/apps/webprod/apache/htdocs/cdlib/cdlib-ui',
      authFile: 'gulp-sftp-key.json', // important: .gitignore this file
      auth: 'keyMain'
    }));
});
