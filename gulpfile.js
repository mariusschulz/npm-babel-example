var gulp = require("gulp");
var babel = require("gulp-babel");

var libDir = "lib/";

gulp.task("babel", function() {
    return gulp.src("src/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest(libDir));
});

gulp.task("default", ["babel"]);
