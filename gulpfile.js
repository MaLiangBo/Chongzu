//1.通过require()导入所需插件
var gulp = require('gulp'),
	   uglify = require('gulp-uglify') ,
	   cssnano = require('gulp-cssnano'),
	   rename = require('gulp-rename'),
	   sass = require('gulp-sass'),
	   imagemin = require('gulp-imagemin');
//2.创建并发布任务

gulp.task('sass',function(){
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/css'));
})
gulp.task('imagemin',function(){
	gulp.src('./src/img/detailsimg/*')
	.pipe(imagemin())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/img/detailsimg'));
})
gulp.task('js',function(){
	gulp.src('./src/js/*.js')
	.pipe(uglify())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(gulp.dest('./dist/js'))
})
gulp.task('default',function(){
	gulp.watch('./src/sass/*.scss',['sass']);
	gulp.watch('./src/js/*.js',['js']);
})

