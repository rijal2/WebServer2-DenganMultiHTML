const http = require('http');//memanggil Core Module http yang ada di NodeJS
const { debug } = require('util');
const port = 3000;
const fs = require('fs');

const renderHTML = (path, res) => {
    fs.readFile(path, ((err, data) => {//Parameter 'err' akan mengirimkan informasi file html yang dicari apakah file nya ada atau tidak. Jika tidak ada maka parameter 'err' akan berisi error.
        if(err){//Jika err bernilai error/true
            res.writeHead(404);
            res.write(`Error: File yang anda cari tidak ditemukan`)
        } else{//Jika file nya ada / tidak error
            res.write(data);//parameter 'data' berisi data file html
        }
        res.end()
    }))
}

//Membuat server cengan methode CreateServer(), kemudian jalankan dengan methode listen()
http.createServer((req, res) => {
    const url = req.url;//Menangkap request dari user yang berupa URL
    
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    if(url === '/about'){
        renderHTML('./about.html', res)    
    } else if(url === '/contact'){
        renderHTML('./contact.html', res)
    } else{
        renderHTML('./index.html', res)
    }
    
}).listen(port, () => {
    console.log(`Server sedang berjalan pada port ${port}..`)//akan dicetak pada terminal
})
