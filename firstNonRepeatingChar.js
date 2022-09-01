/* First non repeating char */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`Mana huruf awal yang tidak duplikat, tulis disini: `, text => {
    let hasil = text.split(" ");
    let tampung = [];
    for (let i = 0; i < hasil.length; i++) {
        let tangkap = hasil[i].charAt(0);
        tampung.push(tangkap)
    }
    const hapusDuplicate = (arr) => {
        return arr.filter((v, i) => arr.indexOf(v) === i)
    }
    const duplicate = (arr) => {
        return arr.filter((v, i) => arr.indexOf(v) !== i)
    }
    const cik = duplicate(tampung).length;
    const isi = hapusDuplicate(tampung)
    for (let i = 0; i < cik; i++) {
        isi.shift()
    }
    console.log(isi[0])
    readline.close();
});