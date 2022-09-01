/* Remove Duplicate */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`Hapus duplikasi, tulis angka disini dengan koma: `, angka => {
    let tampung;
    tampung = JSON.parse("[" + angka + "]");
    const removeDuplicate = (arr) => {
        return arr.filter((v, i) => arr.indexOf(v) == i);
    }
    console.log(removeDuplicate(tampung));
    readline.close()
});