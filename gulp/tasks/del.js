import { deleteSync } from 'del';


export const delFiles = (done) => {

    deleteSync([paths.app.base + '*'])

    done()

}
export const delFonts = (done) => {

    deleteSync(paths.build.fonts + '**/*.ttf');

    done()
    
}