var webpack = require('webpack')
var http = require('http')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var webpackConfig = require('./webpack.config')

var app = new (require('express'))()
var port = 3000

var compiler = webpack(webpackConfig)

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    index: 'index.html',
}))
app.use(webpackHotMiddleware(compiler))

app.listen(port, (error) => {
    if (error) {
        console.error(error)
    } else {
        console.info(`==> Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
    }
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/pics', (req, res) => {
    http.get('http://api-fotki.yandex.ru/api/top/?format=json', (resp) => {
        let body = '';
        resp.on('data', (d) => { body += d });
        resp.on('end', () => { res.send(body) });
    })
})
