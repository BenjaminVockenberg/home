"use strict";

var gulp = require('gulp'),
  	path = require('path'),
  	data = require('gulp-data'),
  	pug = require('gulp-pug'),
  	prefix = require('gulp-autoprefixer'),
  	sass = require('gulp-sass'),
  	browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    image = require('gulp-image');

/*
 * Directories here
 */
var paths = {
  public: './app/',
  sass: './src/sass/',
  css: './app/css/',
  jssrc: './src/js/',
  jsmin: './app/', 
  data: './src/_data/',  
  imagedes: './app/'
};

/**
 * Compile .pug files and pass in data from json file
 * matching file name. index.pug - index.pug.json
 */
gulp.task('pug', function () {
  return gulp.src('./src/**/*.pug')
    //.pipe(data(function (file) {
      //return require(paths.data + path.basename(file.path) + '.json');
    //}))
    .pipe(pug())
    .on('error', function (err) {
      process.stderr.write(err.message + '\n');
      this.emit('end');
    })
    .pipe(gulp.dest(paths.public));
});

/**
 * Compile .js files matching file name.
 */
gulp.task('uglify', function () {
  return gulp.src('./src/**/*.js')
    //.pipe(data(function (file) {
      //return require(paths.data + path.basename(file.path) + '.json');
    //}))
    .pipe(uglify())
    .on('error', function (err) {
      process.stderr.write(err.message + '\n');
      this.emit('end');
    })
    .pipe(gulp.dest(paths.jsmin));
});

/**
 * Recompile .pug files and live reload the browser
 */
gulp.task('rebuild', ['pug'], function () {
  browserSync.reload();
});

/**
 * Wait for pug and sass tasks, then launch the browser-sync Server
 */
gulp.task('browser-sync', ['sass', 'pug', 'uglify'], function () {
  browserSync({
    server: {
      baseDir: paths.public
    },
    notify: false
  });
});

/**
 * Compile .scss files into public css directory With autoprefixer no
 * need for vendor prefixes then live reload the browser.
 */
gulp.task('sass', function () {
  return gulp.src(paths.sass + '*.scss')
    .pipe(sass({
      includePaths: [paths.sass],
      outputStyle: 'compressed'
    }))
    .on('error', sass.logError)
    .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {
      cascade: true
    }))
    .pipe(gulp.dest(paths.css))
    .pipe(browserSync.reload({
      stream: true
    }));
});


/**
 * Compress image files matching file name.
 */
gulp.task('uglify', function () {
  return gulp.src('./src/**/*')    
    .pipe(image())
    .on('error', function (err) {
      process.stderr.write(err.message + '\n');
      this.emit('end');
    })
    .pipe(gulp.dest(paths.imagedes));
});

/**
 * Watch scss files for changes & recompile
 * Watch .pug files run pug-rebuild then reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(paths.sass + '**/*.scss', ['sass']);
  gulp.watch(paths.jssrc + '**/*.js', ['uglify']);
  gulp.watch('./src/img/*', ['image']);  
  gulp.watch('./src/**/*.pug', ['rebuild']);  
});

// Build task compile sass and pug.
gulp.task('build', ['sass', 'pug', 'image', 'uglify']);

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync then watch
 * files for changes
 */
gulp.task('default', ['browser-sync', 'watch']);