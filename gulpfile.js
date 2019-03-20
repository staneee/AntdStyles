var gulp = require('gulp'); //本地安装gulp所用到的地方
var less = require('gulp-less');//本地安装gulp-less所用到的地方

//定义一个 buildStyles 任务（自定义任务名称）
function buildStyles() {
    return gulp.src('src/index.less') //该任务针对的文件，你需要编译的文件
        .pipe(less({ javascriptEnabled: true })) //该任务调用的模块
        .pipe(gulp.dest('dist')); //将会在css下生成index.css
}

//定义默认任务，通过命令行执行gulp命令若没提供任务名就按此处定义的任务来执行，可以是一次执行多个任务。
gulp.task('default', buildStyles); 
