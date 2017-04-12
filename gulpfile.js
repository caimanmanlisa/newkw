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
//引入gulp，项目文件中安装的gulp的引入方式
var gulp =require('gulp');
//引入组件
var rev  = require("gulp-rev"); //添加版本号，hash码
var revReplace = require("gulp-rev-replace");  //更新引用
var useref= require("gulp-useref");  // 分析到有压缩注释，进行压缩
var filter = require("gulp-filter"); // 筛选
var uglify = require("gulp-uglify");  //压缩js代码插件
var csso = require("gulp-csso");   //压缩css代码插件

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

