'use strict';

const gulp 	= require('gulp'),
	sass 	= require('gulp-sass'),
	concat 	= require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename')
	svgsprite = require('gulp-svg-sprite'),
	sourcemaps = require('gulp-sourcemaps'),
	jade = require('gulp-jade'),
	watch = require('gulp-watch')

gulp
	.task('watch', ()=> {
		gulp.watch('./dev/**/*.scss', ['sass']);
		gulp.watch('./dev/**/*.jade', ['jade']);
		gulp.watch('./dev/**/*.js', ['uglify']);
	})
	.task('default', ['svgsprite', 'sass', 'jade', 'uglify'])
	.task('sass', ()=> {
		return gulp.src('./dev/main.scss')
			.pipe(sourcemaps.init())
			.pipe(sass(
				{
					outputStyle: 'compressed',
					lineComments: false
				})
				.on('error', sass.logError)
			)
			.pipe(gulp.dest('./public/stylesheet'))
	})
	.task('svgsprite', () => {
		return gulp.src('./dev/assets/svg/**/*.svg')
				.pipe(svgsprite({
					/*shape: {
						dest: './svg'
					},*/
					mode: {
						view: {
							render: {
								css: true
							}
						},
						symbol: true
					}
				}))
				.pipe(gulp.dest('./public/stylesheet'))
	})
	.task('jade', ()=> {
		gulp.src('./dev/**/*.jade')
		.pipe(jade())
		.pipe(gulp.dest('./public/template'))
	})
	.task('uglify', ()=> {
		gulp.src([
			'./bower_components/angular/angular.min.js',
			'./dev/components/**/*.js',
			'./dev/cardprofilecomponent/**/*.js',
			'./dev/listcomponent/**/*.js',
			'./dev/skillcomponent/**/*.js',
			'./dev/titlecomponent/**/*.js',
			'./dev/viewprofilecomponent/**/*.js',
			'./dev/main.js'
		])
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./dev'))
		.pipe(rename('app.min.js'))
		.pipe(uglify({
				compress: true,
				mangle: false,
				preserveComponents: true,
				licence: true
		}))
		.pipe(gulp.dest('./public/javascript'))
	})
