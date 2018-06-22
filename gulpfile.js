const del = require('del');
const gulp = require('gulp');
const minifyCSS = require('gulp-clean-css');
const postcss = require('gulp-postcss');
const runSequence = require('run-sequence');
const sass = require('gulp-sass');
const sassJson = require('gulp-sass-json');
const sassLint = require('gulp-sass-lint');
const shell = require('gulp-shell')
const sourcemaps = require('gulp-sourcemaps');

// Main Tasks:

gulp.task('default', function(cb) {
  runSequence('pull-assets-dev', 'sass-build', 'watch', 'fractal-start', cb);
});

gulp.task('build', function(cb) {
  runSequence('clean', 'sass-build', 'fractal-build', 'push-assets-local', cb);
});

gulp.task('deploy', function(cb) {
  runSequence('build', 'upload-library', cb);
});

gulp.task('update-dev', function(cb) {
  runSequence('push-assets-dev', 'git-pull-dev', cb);
});

gulp.task('update-stage', function(cb) {
  runSequence('push-assets-stage', 'git-pull-stage', cb);
});

gulp.task('update-prod', function(cb) {
  runSequence('push-assets-prod', 'git-pull-prod', cb);
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

// General Tasks:

gulp.task('clean', function() {
  return del(['./dist', './ui-assets/css/sourcemaps']);
})

gulp.task('watch', function(){
  gulp.watch('./scss/*.scss', ['sass-watch', 'scss-lint']);
  gulp.watch('./scss/_breakpoints.scss', ['sass-to-json']);
});

gulp.task('sass-watch', function() {
 return gulp.src('./scss/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss())
  .pipe(sourcemaps.write('sourcemaps'))
  .pipe(gulp.dest('./ui-assets/css'));
});

gulp.task('sass-build', function() {
 return gulp.src('./scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(postcss())
  .pipe(minifyCSS())
  .pipe(gulp.dest('./ui-assets/css'));
});

gulp.task('sass-to-json', function () {
  return gulp.src('./scss/_breakpoints.scss')
    .pipe(sassJson())
    .pipe(gulp.dest('./ui-assets/js')); // breakpoints.json
});

gulp.task('scss-lint', function() {
  return gulp.src('./scss/*.scss')
    .pipe(sassLint({
      configFile: 'sass-lint-config.yml'
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

// Rsync Tasks:

gulp.task('upload-library', shell.task('rsync -rvu --delete --exclude \'.DS_Store\' ./dist/ webprod@webprod.cdlib.org:/apps/webprod/apache/htdocs/cdlib/cdlib-ui'))

gulp.task('pull-assets-dev', shell.task('rsync -rvu cdlib@web-cdlib2-dev.cdlib.org:/apps/cdlib/apache/htdocs/wp-content/themes/cdlib/ui-assets ./'))

gulp.task('push-assets-local', shell.task('rsync -rvu --delete --exclude \'.DS_Store\' ./dist/ui-assets /Users/jhagedorn/Documents/cdlib-local/htdocs/wp-content/themes/cdlib'))

gulp.task('push-assets-dev', shell.task('rsync -rvu --delete --exclude \'.DS_Store\' ./dist/ui-assets cdlib@web-cdlib2-dev.cdlib.org:/apps/cdlib/apache/htdocs/wp-content/themes/cdlib'))

gulp.task('push-assets-stage', shell.task('rsync -rvu --delete --exclude \'.DS_Store\' ./dist/ui-assets cdlib@web-cdlib2-stg-2a.cdlib.org:/apps/cdlib/apache/htdocs/wp-content/themes/cdlib'))

gulp.task('push-assets-prod', shell.task('rsync -rvu --delete --exclude \'.DS_Store\' ./dist/ui-assets cdlib@web-cdlib2-prd-2a.cdlib.org:/apps/cdlib/apache/htdocs/wp-content/themes/cdlib'))

// Server Git Pull Shell Tasks

gulp.task('git-pull-dev', shell.task('ssh cdlib@web-cdlib2-dev.cdlib.org /apps/cdlib/bin/remote_git_pull_dev.sh'))

gulp.task('git-pull-stage', shell.task('ssh cdlib@web-cdlib2-stg-2a.cdlib.org /apps/cdlib/bin/remote_git_pull_stg.sh'))

gulp.task('git-pull-prod', shell.task('ssh cdlib@web-cdlib2-prd-2a.cdlib.org /apps/cdlib/bin/remote_git_pull_prd.sh'))
