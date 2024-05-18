import gulp from 'gulp'
import browserSync from 'browser-sync'
import { server } from '../tasks/server.js'
import { scss } from '../tasks/scss.js'
import concat from 'gulp-concat'
import { foldersStructure } from '../tasks/structure.js'
import { delFiles, delFonts } from '../tasks/del.js'
import { convertFonts } from '../tasks/fonts.js'
import { minImage } from '../tasks/image.js'




export default global.plugins = {

    minImage: minImage,
    convertFonts: convertFonts,
    delFiles: delFiles,
    delFonts: delFonts,
    foldersStructure: foldersStructure,
    concat: concat,
    scss: scss,
    server: server,
    browserSync: browserSync,
    gulp: gulp,

}
