const http = require('http')

const server = http.createServer((req,res) => {
    console.log(req)
})

server.listen(3000,'localhost', () => {
    console.log('Servidor rodando na porta 3000')
})