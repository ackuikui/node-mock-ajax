const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/api/*', (req, res) => {
    let apiPath = req.path
    apiReadFile(apiPath, res)
})

app.post('/api/*', (req, res) => {
    let apiPath = req.path
    apiReadFile(apiPath, res)
})

function apiReadFile(apiPath, res) {
    console.log(apiPath);
    let data = '{}'
    if(apiPath.indexOf('/api') == 0){
        try {
            apiPath = apiPath.replace(/^\//, '')
            let file = path.resolve(__dirname, apiPath + '.js')
            delete require.cache[file] // 清除缓存
            data = require(file) // 动态加载
        } catch (error) {
            // console.log(error)            
        }
    }
    res.send(data)
}


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})