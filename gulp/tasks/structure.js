
export const foldersStructure = () => {
    return plugins.gulp.src([

        paths.build.css + '/main.min.css',
        paths.build.js + '/main.js',
        paths.build.img,
        paths.build.fonts + '**/*',
        paths.build.html,

    ], { base: 'build' })
    
    .pipe(plugins.gulp.dest(paths.app.base))
}
