/**
 * Created by Administrator on 2017/4/11.
 */

/*
 var gulp=require('gulp');
gulp.task('task-name',function(){
});

gulp.task('hello',function(){
    console.log('hello gulp 2017');
});
 */
//����gulp����Ŀ�ļ��а�װ��gulp�����뷽ʽ
var gulp =require('gulp');
//�������
var rev  = require("gulp-rev"); //��Ӱ汾�ţ�hash��
var revReplace = require("gulp-rev-replace");  //��������
var useref= require("gulp-useref");  // ��������ѹ��ע�ͣ�����ѹ��
var filter = require("gulp-filter"); // ɸѡ
var uglify = require("gulp-uglify");  //ѹ��js������
var csso = require("gulp-csso");   //ѹ��css������

gulp.task('default', function() {
    var jsFilter=filter('**/*.js',{restore:true});
    var cssFilter=filter('**/*.css',{restore:true});
    var indexHtmlFilter=filter(['**/*','!**/index.html'],{restore:true});

    return gulp.src('src/index.html')
        .pipe(useref())
        .pipe(jsFilter)
        .pipe(uglify())
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(csso())
        .pipe(cssFilter.restore)
        .pipe(indexHtmlFilter)
        .pipe(rev())
        .pipe(indexHtmlFilter.restore)
        .pipe(revReplace())
        .pipe(gulp.dest('dist'));
});

