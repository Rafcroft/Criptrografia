const Text = "Please enter you text: ";

let Palavra = [];
let FinalText = "";

for (let i = 0; i < Text.length; i++) {
    let Crypt = Text.charCodeAt(i)
    Palavra.push(Crypt)
}

console.log(Palavra);

for (let i = 0; i < Palavra.length; i++) {
    let Descrypt = String.fromCharCode(Palavra[i])
    FinalText = FinalText + Descrypt
}

console.log(FinalText)
