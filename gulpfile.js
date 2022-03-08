const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('./src/styles/sass/**/*.scss')
        .pipe(sass())
        .pipe(dest('./src/styles/css'))
}

function watchTask() {
    watch(['src/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles,watchTask)