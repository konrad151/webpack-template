module.exports = {
  plugins: [
    require('postcss-preset-env')({ // eslint-disable-line
      browsers: 'last 2 versions',
    }),
  ],
};
