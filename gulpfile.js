// Импорт основных модулей ( путей, плагинов )

import plugins from "./gulp/config/plugins.js";
import paths from "./gulp/config/paths.js";

// Импорт кастомных тасков

// import { foldersStructure } from './gulp/tasks/structure.js'

// Слежение за файлами

export const devWatch = () => {
  plugins.gulp.watch(paths.watch.html).on("change", plugins.browserSync.reload);
  plugins.gulp.watch([paths.watch.js]);
  plugins.gulp.watch([paths.watch.scss], plugins.scss);
};

// Основные команды для работы с gulp

export default plugins.gulp.series(
  plugins.gulp.parallel(plugins.scss, plugins.convertFonts, plugins.delFonts),
  plugins.gulp.parallel(devWatch, plugins.server)
);

export const build = plugins.gulp.series(
  plugins.delFiles,
  plugins.foldersStructure,
  plugins.minImage
);
