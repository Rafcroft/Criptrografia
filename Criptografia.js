const console = require("console");
const readline = require("readline");
const { postMessageToThread } = require("worker_threads");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please enter your text: ", function (Text) {
    rl.question("Please enter your password: ", function (KeyF) {

        let Palavra = [];
        let KeySoma = [];
        let FinalText = "";
        let KeyOrigin = Number()

        for (let i = 0; i < KeyF.length; i++) {
            let KeyCrypt = KeyF.charCodeAt(i)
            KeySoma.push(KeyCrypt)
        }

        // -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

        let Key = 17;
        let Position = 1;

        const PrimoBase = 37;
        const PrimoModular = 1000000007;
        const PrimoModularSecundario = 65000;
        for (let numero of KeySoma) {

            let Peso = numero * Position;

            Key = (Key * PrimoBase + Peso) % PrimoModular;

            Key = Key ^ Peso;

            Position = Position + 1;
        }

        Key = Math.abs(Key);

        console.log(Key)
        KeyOrigin = Key

        // --------------------------------------------------------------------------------------------------------------------------------------------------------------------



        for (let i = 0; i < Text.length; i++) {
            let Crypt = Text.charCodeAt(i)
            Key = (Key * 41) % PrimoModularSecundario
            Crypt = Crypt + Key
            Palavra.push(Crypt)
        }

        console.log(Palavra.join(", "));
        Key = KeyOrigin

        for (let i = 0; i < Palavra.length; i++) {
            let PalavraAtual = Palavra[i]
            Key = (Key * 41) % PrimoModularSecundario
            PalavraAtual = Number(PalavraAtual - Key)
            let Descrypt = String.fromCharCode(PalavraAtual)
            FinalText = FinalText + Descrypt
        }

        console.log(FinalText)
        rl.close()
    })
})