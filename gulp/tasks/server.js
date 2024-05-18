export const server = () => {
  plugins.browserSync.init({
    server: {
      baseDir: "./build/",
    },
  });
};
