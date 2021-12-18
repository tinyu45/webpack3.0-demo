const webpack=require('webpack');

module.exports={
    // 入口 编译入口
    entry:"./src/index.js",
    // 入口 最终生成文件
    output:{
        path:__dirname,
        filename:'bundle.js'
    },
    module:{
        // 其他类型文件（非js）加载器
        loaders:[
            {test:/\.css$/, loader:"style-loader!css-loader"}
        ]
    },
    // 插件 执行个性化操作
    plugins:[
        new webpack.BannerPlugin({ banner: 'weboack 测试项目'})
    ]
}