import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);

export const scss = () => {
  return plugins.gulp
    .src(paths.build.sass)
    .pipe(sass().on("error", sass.logError))
    .pipe(plugins.concat("main.css"))
    .pipe(plugins.gulp.dest(paths.build.css))
    .pipe(plugins.browserSync.stream());
};
