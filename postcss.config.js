module.exports = {
  plugins: {
    "postcss-import": {},
    "precss": {},
    "postcss-preset-env": {},
    "rfs": {},
    "postcss-font-magician": {
      variants: {
        Roboto: {
          "300": [],
          "400": [],
          "700": []
        }
      },
      foundries: ["google"],
    }
  }
};
