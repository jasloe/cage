module.exports = {
  browserSync: {
    hostname: "local.sound-old.local",
    port: 8080,
    openAutomatically: true,
    reloadDelay: 50,
    injectChanges: true
  },

  drush: {
    enabled: false,
    alias: {
      css_js: "drush @SITE-ALIAS cc css-js",
      cr: "drush @SITE-ALIAS cr"
    }
  },

  twig: {
    useCache: false
  }
};
