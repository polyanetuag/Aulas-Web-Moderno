const gulp = require("gulp");
const webserver = require("gulp-webserver");

function servidor() {
  return gulp.src("build").pipe(
    webserver({
      port: 8080,
      open: true,
      livereload: true,
    })
  );
}

function monitorarArquivos(cb) {
  return cb();
}

module.exports = {
  monitorarArquivos,
  servidor,
};
