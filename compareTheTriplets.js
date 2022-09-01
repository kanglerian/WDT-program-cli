/* Compare the Triplets */
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

readline.question(`Input 3 nilai pertama: `, angkaPertama => {
    let input1;
    let input2;
    let hasil = [];
    input1 = angkaPertama.split("")
    readline.question(`Input 3 nilai kedua: `, angkaKedua => {
        input2 = angkaKedua.split("")
        for (let i = 0; i < angkaPertama.length; i++) {
            if(i == 0){
                hasil.push(angkaPertama[i] > angkaKedua[i] == true ? 1 : '')
            }else if(i == 1){
                hasil.push(angkaPertama[i] == angkaKedua[i] == true ? 1 : '')
            }else if(i == 2){
                hasil.push(angkaPertama[i] < angkaKedua[i] == true ? 1 : '')
            }
        }
        hasil = hasil.join(" ");
        console.log(`${hasil}`)
        readline.close();
    })
});