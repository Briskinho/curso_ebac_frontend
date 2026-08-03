const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

function comprimeImg() {
    return gulp.src('./src/images/*', {encoding: false})
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'));
}

function compirmeJs() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'));
}

function compilaSass() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            style: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

exports.default = function() {
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./src/scripts/*.js', { ignoreInitial: false }, gulp.series(compirmeJs));
    gulp.watch('./src/images/*', { ignoreInitial: false }, gulp.series(comprimeImg));
}