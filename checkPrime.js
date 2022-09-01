/* Check Prime */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question(`Cek angka disini: `, angka => {
    let pembagi = 0;
    for (let i = 1; i <= angka; i++) {
        if(angka % i == 0){
            pembagi++
        }        
    }
    if(pembagi == 2){
        console.log(true);
    }else{
        console.log(false)
    };
    readline.close();
});