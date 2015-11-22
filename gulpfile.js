const path = require('path');

const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('gulp-webpack');
const uglify = require('gulp-uglify');
//const sourcemaps = require('gulp-sourcemaps');

gulp.task('watch', ['client', 'server'], () => {
  gulp.watch('src/{actions,dispatcher,store,constants,reducers,containers,components}/**/*.{js,jsx}', ['server']);
  gulp.watch('src/**/*.{js,jsx}', ['client']);
});

gulp.task('server', () =>
  gulp.src('src/{actions,dispatcher,store,constants,reducers,containers,components}/**/*.{js,jsx}')
    .pipe(babel())
    .pipe(gulp.dest('lib')));

gulp.task('client', () =>
  gulp.src('src/**/*.{js,jsx}')
    .pipe(babel())
    .pipe(gulp.dest('app')));

gulp.task('build', () =>
  gulp.src('src/main.js')
    .pipe(webpack(require('./webpack.config')))
    .pipe(uglify())
    .pipe(gulp.dest('build')));

gulp.task('default', ['client', 'server']);
