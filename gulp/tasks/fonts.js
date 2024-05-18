import ttf2woff from 'gulp-ttf2woff'
import ttfToWoff2 from 'gulp-ttftowoff2'


export const convertFonts = () => {
   
    return plugins.gulp.src([paths.watch.fonts])

        .pipe(ttf2woff({clone: true}))
        .pipe(ttfToWoff2())
        .pipe(plugins.gulp.dest(paths.build.fonts))

}
