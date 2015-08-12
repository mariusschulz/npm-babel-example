var gulp = require("gulp");
var babel = require("gulp-babel");

var libDir = "lib/";
var jsFiles = "src/**/*.js";

gulp.task("babel", function() {
    return gulp.src(jsFiles)
        .pipe(babel())
        .pipe(gulp.dest(libDir));
});

gulp.task("default", ["babel"]);
