const gulp = require("gulp");
const series = gulp.series;

const antes1 = (cb) => {
  console.log("Tarefa antes 1");
  return cb();
};

const antes2 = (cb) => {
  console.log("Tarefa antes 2");
  return cb();
};

function copiar(cb) {
  gulp
    .src(["pastaA/arquivo1.txt", "pastaA/arquivo2.txt"])
    .pipe(gulp.dest("pastaB")); //transformações no arquivo de entrada
  return cb();
}

const fim = (cb) => {
  console.log("Tarefa fim");
  return cb();
};

module.exports.default = series(antes1, antes2, copiar, fim);
