const gulp=require("gulp")
const sass=require("gulp-sass")
const minCSS=require('gulp-cssmin')
const minHTML=require('gulp-htmlmin')
const minJS=require("gulp-uglify")
const babel = require('gulp-babel');
const autoprefixer=require("gulp-autoprefixer")
const watch = require('gulp-watch');
let htmHeader=()=>{
    return  gulp.src("src/html/*.html")
    .pipe(minHTML({
        removeComments:true,
        collapseBooleanAttributes:true,
        removeEmptyAttributes:true,
        removeScriptTypeAttributes:true,
        removeStyleLinkTypeAttributes:true,
        minifyJS:true,
        minifyCSS:true
    }))
    .pipe(gulp.dest('dist/html/'))
}
let cssHeader=()=>{
    return   gulp.src("src/scss/*.scss")
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer({
        BroWserslist:[
            "last 2 versions",
            "ios>7",
            "Firefox<20",
            "last 2 Exp"
        ]
    }))
    .pipe(minCSS())
    .pipe(gulp.dest('dist/css/'))
}
let jsHeader=()=>{
    return   gulp.src("src/js/*.js")
        .pipe(babel({
            "presets": ["env"]
        }))
        .pipe(minJS())
        .pipe(gulp.dest('dist/js/'))
}
let jsonHeader=()=>{
     return  gulp.src("src/json/*.json")
    .pipe(gulp.dest('dist/json/'))
}
let imgHeader=()=>{
     return  gulp.src("src/img/")
    .pipe(gulp.dest('dist/img/'))
}
let apiHeader=()=>{
    return  gulp.src("src/api/*.php")
    .pipe(gulp.dest('dist/api/'))
}
gulp.task('watch', function () {
    watch("src/html/*.html", gulp.series(htmHeader));
    watch("src/scss/*.scss", gulp.series(cssHeader));
    watch("src/js/*.js", gulp.series(jsHeader));
    watch("src/json/*.json", gulp.series(jsonHeader));
    watch("src/img/", gulp.series(imgHeader));
    watch("src/api/*.php", gulp.series(apiHeader));
});
module.exports.default=gulp.parallel(htmHeader,cssHeader,jsHeader,jsonHeader,imgHeader,apiHeader,"watch")
// module.exports.htm=htmHeader