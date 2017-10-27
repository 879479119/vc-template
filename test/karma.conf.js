module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage-istanbul'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap', 'coverage'],
    },
    webpack: {
      module: {
        rules: [
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              loaders: {
                js: 'babel-loader',
              },
              postLoaders: {
                js: 'istanbul-instrumenter-loader?esModules=true',
              },
            },
          },
          {
            test: /\.js$/,
            loader: 'babel-loader', exclude: /node_modules/,
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]',
            },
          },
          {
            test: /\.less$/,
            use: [
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                options: { sourceMap: true },
              },
              { loader: 'less-loader',
                options: { sourceMap: true },
              },
            ],
          },
        ],
      },
    },
    webpackMiddleware: {
      noInfo: true,
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'text-summary' },
      ],
    },
  })
}
