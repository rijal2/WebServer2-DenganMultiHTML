const http = require('http');//memanggil Core Module http yang ada di NodeJS
const { debug } = require('util');
const port = 3000;

//Membuat server cengan methode CreateServer(), kemudian jalankan dengan methode listen()
http.createServer((req, res) => {
    const url = req.url;//Menangkap request dari user yang berupa URL
    
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    if(url === '/about'){
        res.write('Ini adalah halaman About');//Tulisan yang akan tampipl di halaman web
        res.end();//>metode res.end() berfungsi untuk menghentikan proses yang ada di dalam server    
    } else if(url === '/contact'){
        res.write('Ini adalah halaman Contact');//Tulisan yang akan tampipl di halaman web
        res.end();//>metode res.end() berfungsi untuk menghentikan proses yang ada di dalam server
    } else{
        res.write('Hello Word!');//Tulisan yang akan tampipl di halaman web
        res.end();//>metode res.end() berfungsi untuk menghentikan proses yang ada di dalam server
    }
    
}).listen(port, () => {
    console.log(`Server sedang berjalan pada port ${port}..`)//akan dicetak pada terminal
})
