const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
// const sass = require("gulp-sass");
const uglifycss = require("gulp-uglifycss");
const concat = require("gulp-concat");
const htmlmin = require("gulp-htmlmin");

function appHTML() {
  return gulp
    .src("src/**/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
}

// function appCSS() {
//   return gulp
//     .src("src/assets/sass/index.scss")
//     .pipe(sass().on("error", sass.logError))
//     .pipe(uglifycss({ uglyCmomments: true }))
//     .pipe(concat("app.mim.css"))
//     .pipe(gulp.dest("build/assets/css"));
// }

function appJS() {
  return gulp
    .src("src/assets/js/**/*.js")
    .pipe(babel({ presets: ["ENV"] }))
    .pipe(uglify())
    .pipe(concat("app.min.js"))
    .pipe(gulp.dest("build/assets/js"));
}

function appIMG() {
  return gulp.src("src/assets/img/**/*.*").pipe(gulp.dest("build/assets/imgs"));
}

//REFERENCIA DAS TASKS
gulp.task("appHTML", appHTML);
// gulp.task("appCSS", appCSS);
gulp.task("appJS", appJS);
gulp.task("appIMG", appIMG);

module.exports = {
  appHTML,
  // appCSS,
  appJS,
  appIMG,
};
