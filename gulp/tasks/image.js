import imagemin from "gulp-imagemin"

export const minImage = () => {

    return plugins.gulp.src(paths.build.img)
        
        .pipe(imagemin({progressive: true}))
        .pipe(plugins.gulp.dest(paths.app.img))
}

