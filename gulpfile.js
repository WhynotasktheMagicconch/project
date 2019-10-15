/* 
    gulp发布任务的地方
*/
const gulp = require("gulp");
gulp.task("copy-html",function(){
    return gulp.src("html/*.html")
    .pipe(gulp.dest("dist/html"))
    .pipe(connect.reload()); 
})
//处理后缀.js数据
gulp.task("scripts",function(){
    return gulp.src(["js/*.js","!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload()); 
})

//处理图片
gulp.task("images",function(){
    return gulp.src("images/*.{jpg,png}")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})
//处理json数据

gulp.task("data",function(){
    return gulp.src(["*.json","!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload()); 
})


/* const scss = require("gulp-scss");
const minifyCSS = require("gulp");
const rename = require("gulp-rename");
gulp.task("scss",function(){
    return gulp.src("css/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"));
}) */

//一次性执行多个任务

gulp.task("build",['copy-html',"scripts","images","data"],function(){
    console.log("项目建立成功");
})

//启动监听
gulp.task("watch",function(){
    gulp.watch("html/*.html",['copy-html']);
    gulp.watch(["js/*.js","!gulpfile.js"],["scripts"] );
    gulp.watch(["images/*.{jpg,png}"],["images"]);
    gulp.watch(["*.json","!package.json"],["data"]);  
})

//启动服务器
const connect = require("gulp-connect");
gulp.task("server",function(){
    connect.server({
        root:"dist",
        port:9527,
        livereload:true
    })
})

//设置一个默认的任务
gulp.task("default",['watch','server']);