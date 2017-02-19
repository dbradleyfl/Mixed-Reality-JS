var gulp = require('gulp');
var budo = require('budo')
var babelify = require('babelify')
var fs = require('fs');
var git = require("gulp-git");

let paths = {
  'app': 'src/*',
  'icons': 'Icons/*'
}

gulp.task('watch', function(cb) {

  fs.access('HoloJS', fs.constants.F_OK , (err) => {
    if (err){
      git.clone('https://github.com/dbradleyfl/HoloJS.git', {args: '--recursive'} , function (err) {
        if (err) throw err;
        console.log('Successfully downloaded HoloJS and Angle')
      });
    } else {
      console.log('repo exists so not dowloading it')
    }
  });

  gulp.watch(paths.app, ['build-app']);
  gulp.watch(paths.icons, ['build-icons']);

  budo('./src/app.js', {
    title: 'HoloJS-Builder',
    live: true,             // setup live reload
    dir: './src',           // serve assets from src
    port: 8000,             // use this port
    watchGlob: '{src}/*',
    browserify: {
      transform: babelify   // ES6
    }
  }).on('connect', function (ev) {
    console.log('Server running on %s', ev.uri)
    console.log('LiveReload running on port %s', ev.livePort)
  }).on('update', function (buffer) {
    console.log('bundled - %d bytes', buffer.length);
  }).on('exit', cb);
});

gulp.task('build-app', function () {
  console.log('piping src ->');
  return gulp.src(paths.app).pipe(gulp.dest('HoloJS/HoloJS/ThreeJSApp/Scripts'))
});

gulp.task('build-icons', function () {
  console.log('piping icons ->');
  return gulp.src(paths.icons).pipe(gulp.dest('HoloJS/HoloJS/ThreeJSApp/Assets'))
});

gulp.task('default', ['watch']);
