

var gulp = require('gulp'),
  	path = require('path'),
  	data = require('gulp-data'),
  	pug = require('gulp-pug'),
  	prefix = require('gulp-autoprefixer'),
  	sass = require('gulp-sass'),
  	browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    image = require('gulp-image'),
    clean = require('gulp-clean');
    
/*
 * Directories here
 */
var paths = {
  public: './app/',
  sass: './src/sass/',
  css: './app/css/',
  jssrc: './src/js/',
  jsmin: './app/js/', 
  data: './src/_data/',  
  imagedes: './app/',  
};

/**
 * Compile .pug files and pass in data from json file
 * matching file name. index.pug - index.pug.json
 */
gulp.task('pug', function () {
  return gulp.src('./src/**/*.pug')    
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
  return gulp.src('./src/js/**/*.js')    
    // .pipe(uglify())
    // .on('error', function (err) {
    //   process.stderr.write(err.message + '\n');
    //   this.emit('end');
    // })
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
 * handling font files from bootstrap
 * glyphicons. So a bug of wrong rendered 
 * glyphicon is fixed
 */
gulp.task('fonts', function () {
  gulp.src('./node_modules/bootstrap/dist/fonts/**/*.{eot,svg,ttf,woff,woff2}')
  .pipe(gulp.dest('./app/fonts'));
});

/**
 * Compress image files matching file name.
 */
gulp.task('image', function () {
  return gulp.src('./src/img/**/*')    
    .pipe(image())
    .on('error', function (err) {
      process.stderr.write(err.message + '\n');
      this.emit('end');
    })
    .pipe(gulp.dest(paths.imagedes));
});

/**
 * clean the app folder from unused folders, pug and scss files.
 */
gulp.task('clean', function () {
  return gulp.src('./app/{sass,_data,**/*.pug,tests}', {read: false})    
    .pipe(clean());    
});

/**
 * Watch scss files for changes & recompile
 * Watch .pug files run pug-rebuild then reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(paths.sass + '**/*.scss', ['sass']);
  gulp.watch(paths.jssrc + '**/*.js', ['uglify']);
  gulp.watch('./app/fonts/' + '**/*', ['fonts']);
  gulp.watch('./src/img/*', ['image']);
  gulp.watch('./app/{sass,_data,**/*.scss,**/*.pug, tests}', ['clean']);  
  gulp.watch('./src/**/*.pug', ['rebuild']);     
});

// Build task compile sass and pug.
gulp.task('build', ['sass', 'pug', 'image', 'fonts', 'uglify', 'clean']);

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync then watch
 * files for changes
 */
gulp.task('default', ['browser-sync', 'watch'])