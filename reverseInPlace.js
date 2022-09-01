/* Reverse in Place */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
   
const reverseString = (kalimat) => {
    let pisahText = kalimat.split(" ");
    let tampung = [];
    for (let i = 0; i < pisahText.length; i++) {
        let hasil = pisahText[i].split("");
        let balikHasil = hasil.reverse();
        let gabungHasil = balikHasil.join("");
        tampung.push(gabungHasil)
    }
    let result = tampung.join(" ");
    return result
}

readline.question(`Balik karakter, yuk tulis disini: `, kalimat => {
    console.log(reverseString(kalimat))
    readline.close();
});