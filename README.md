# WebServer2-DenganMultiHTML
MENGHUBUNGKAN BEBERAPA HALAMAN HTML DENGAN WEB SERVER YANG SUDAH DIBUAT

BUAT FILE HTML
01. Membuat File About.html. Jadi setiap request yang mengarah pada 'localhost:3000/about' akan direspon dengan menampilkan halaman about.html
02. Membuat File Contact.html. Jadi setiap request yang mengarah pada 'localhost:3000/contact' akan direspon dengan menampilkan halaman contact.html
03. Membuat File index.html. Jadi rencananya setiap request menggunakan url apapun 'localhost:3000/apapun' maka akan direspon dengan menampilkan halaman index.html

MEMANGGIL FILE HTML YANG SUDAH DIBUAT
01. Karena file yang akan digunakan berada pada sistem operasi kita (local komputer), maka Gunakan core module FileSystem. Impor core module FileSystem dengan >> const fs = require('fs')
02. Gunakan fs, lanjutkan dengan metode readFile()
03. Isi parameternya dengan error dan data.

04. Cek isi err, apakan benar ada error?
