module.exports = {
    outputDir: 'dist',   //build输出目录
    assetsDir: 'assets', //静态资源目录（js, css, img）
    lintOnSave: false, //是否开启eslint
    devServer: {
        open: true, //是否自动弹出浏览器页面
        host: "localhost", 
        port: '8081', 
        https: false,   //是否使用https协议
        hotOnly: false, //是否开启热更新
        proxy:"http://127.0.0.1:5000"
    }
 }