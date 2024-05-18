const app = "./app/";
const build = "./build/";
const devWatch = "app/";

export default global.paths = {
  root: "./",
  app: {
    base: app,
    html: app + "**/*.html",
    css: app + "styles/css",
    img: app + "images/",
    js: app + "js/",
  },
  build: {
    base: build,
    html: build + "pages/*.html",
    css: build + "styles/css",
    sass: build + "styles/scss/**/*.scss",
    img: build + "images/**/*",
    js: build + "js",
    fonts: build + "fonts/",
  },
  watch: {
    base: build,
    html: build + "**/*.html",
    css: build + "styles/css/**/*.css",
    scss: build + "styles/scss/**/*.scss",
    img: build + "images/**/*",
    js: build + "js/**/*.js",
    fonts: build + "fonts/**/*.ttf",
  },
};
