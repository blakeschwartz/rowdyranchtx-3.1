
let gulp          = require('gulp')
let babel         = require('gulp-babel')
let stylus        = require('gulp-stylus')
let browserify    = require('browserify')
let runSequence   = require('run-sequence')
let source        = require('vinyl-source-stream')
let pug           = require('gulp-pug')

let fs            = require('fs')
let path          = require('path')
let yaml          = require('js-yaml')
let mkdirp        = require('mkdirp')


//
// Server
//
gulp.task('server-transpile', () => {
  gulp
    .src('server/**/*.js', {cwd: 'src'})
    .pipe(babel())
    .pipe(gulp.dest('dist/server'))

  gulp
    .src('app.js', {cwd: 'src'})
    .pipe(babel())
    .pipe(gulp.dest('dist'))
})

gulp.task('copy-server', () => {
  gulp
    .src("server/**/*.json", {cwd: 'src'})
    .pipe(gulp.dest('dist/server'))
})


//
// Client stage-1
//
gulp.task('app-transpile', () => {
  gulp
    .src('**/*.js', {cwd: 'src/app'})
    .pipe(babel())
    .pipe(gulp.dest('stage/app'))
})

gulp.task('css-transpile', () => {
  gulp
    .src("**/*.styl", {cwd: 'src/public/css'})
    .pipe(stylus({
      compress: false
    }))
    .pipe(gulp.dest('stage/public/css'))
})


//
// Client app
//
gulp.task('app-browserify', () => {
  browserify('stage/app/index.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist/public'))
})

gulp.task('pug', () => {
  gulp
    .src("**/*.pug", {cwd: 'data/article'})
    .pipe(pug())
    .pipe(gulp.dest('dist/article')); 
})

gulp.task('copy-vendor', () => {
  gulp
    .src('public/vendor/**/*.*', {cwd: 'src'})
    .pipe(gulp.dest('dist/public/vendor'))
})

gulp.task('copy-font', () => {
  gulp
    .src("public/font/**/*.*", {cwd: 'src'})
    .pipe(gulp.dest('dist/public/font'))
})

gulp.task('copy-css', () => {
  gulp
    .src("public/css/**/*.css", {cwd: 'stage'})
    .pipe(gulp.dest('dist/public/css'))
})

gulp.task('copy-html', () => {
  gulp
    .src("**/*.html", {cwd: 'src/public'})
    .pipe(gulp.dest('dist/public'))
})

gulp.task('copy-images', () => {
  gulp
    .src(["public/image/**/*.jpg", "public/image/**/*.png"], {cwd: 'src'})
    .pipe(gulp.dest('dist/public/image'))
})


//
// Site Data
//
gulp.task('copy-news', () => {
  gulp
    .src("**/*.md", {cwd: 'data/news'}) 
    .pipe(gulp.dest('dist/news'))
})

gulp.task('copy-gallery', () => {
  gulp
    .src("**/*.yaml", {cwd: 'data/gallery'})
    .pipe(gulp.dest('dist/gallery'))
})

gulp.task('copy-article', () => {
  gulp
    .src(["**/*.md", "**/*.html", "**/*.yaml"], {cwd: 'data/article'})
    .pipe(gulp.dest('dist/article'))
})

gulp.task('image-db', () => {

  mkdirp.sync("dist/imgdb/db")
  mkdirp.sync("dist/imgdb/img")

  //imgDB = yaml.safeLoad(fs.readFileSync(path.join(dbPath, "src/imgdb/db/imgdb.yaml"), 'utf8'))
  imgDB = yaml.safeLoad(fs.readFileSync("data/imgdb/db/imgdb.yaml", 'utf8'))
  jsonText = JSON.stringify(imgDB, null, 4)
  fs.writeFileSync("dist/imgdb/db/imgdb.json", jsonText)

  gulp
    .src(["imgdb/img/**/*.png", "imgdb/img/**/*.jpg"], {cwd: 'data'})
    .pipe(gulp.dest('dist/imgdb/img'))
})


//
// Dependencies
//
gulp.task('server', ['server-transpile', 'copy-server', 'image-db'])

gulp.task('copy', ['copy-vendor', 'copy-font', 'copy-gallery', 'copy-article', 'copy-news', 'copy-html', 'copy-images'])

gulp.task('app-stage-1', ['pug', 'app-transpile', 'css-transpile', 'copy'])

gulp.task('app-stage-final', ['app-browserify', 'copy-css'])

gulp.task('default', () => {
  runSequence(
    ['server', 'app-stage-1'],
    ['app-stage-final']
    )
})
