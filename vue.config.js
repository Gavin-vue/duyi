// 代码压缩

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 去掉注
// const { config } = require('vue/types/umd');
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置
      // config.mode = 'production';
        const optimization = {
          runtimeChunk: 'single',
          splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 20000, // 依赖包超过20000bit将被单独打包
            cacheGroups: {
              vendor: {
                name:'vendor',
                priority:1,//优先检测
                test: /[\\/]node_modules[\\/]/,
                minSize:0,
                minChunks:1
                // 引用一次就单独打包
                // name (module) {
                //   // get the name. E.g. node_modules/packageName/not/this/part.js
                //   // or node_modules/packageName
                //   const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                //   // npm package names are URL-safe, but some servers don't like @ symbols
                //   return `npm.${packageName.replace('@', '')}`
                // }
              },
              common: {
                chunks: 'all',
                // test: /[\\/]src[\\/]js[\\/]/,
                name: 'nnnn',
                minChunks: 3,
                // maxInitialRequests: 5,
                minSize: 0,
                priority: 0,
              },

            }
          },
    //   minimizer: [
    //     new TerserPlugin({
    //         terserOptions: {
    //             compress: {
    //                 warnings: false,
    //                 drop_console: true, // console
    //                 drop_debugger: false,
    //                 pure_funcs: ['console.log'], // 移除console
    //             },
    //         },
    //     }),
    // ],
  }
     // config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
     Object.assign(config, {
      optimization,
  }); 
   
    } else {
      // 为开发环境修改配置
    }
  },
  productionSourceMap:false,
  chainWebpack: config => {
    //最小化代码
    // config.optimization.minimize(true);
    // //分割代码
    // config.optimization.splitChunks({
    //    chunks: 'all'
    // });
    //开启图片压缩
    // config.module.rule('images')
    // .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    // .use('url-loader')
    //     .loader('url-loader')
    //     .options({
    //        limit: 10240    // 图片小于10k转为base64,默认4k
    //   })
    //     .end()
    // .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    // .use('image-webpack-loader')
    //     .loader('image-webpack-loader')
    //     .options({ bypassOnDebug: true })
    //     .end()

    //开启gzip加速
    // config.plugin('compressionPlugin')
    //   .use(new CompressionPlugin({
    //     test: /\.js$|\.html$|.\css$|\.otf$|\.ttf/, // 匹配文件名
    //     threshold: 10240, // 对超过10k的数据压缩
    //     deleteOriginalAssets: false // 不删除源文件
    //   }))

}


}
