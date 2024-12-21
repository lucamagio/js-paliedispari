//Scelta tra pari e dispari e scelta del numero, tralasciando un inserimento sbagliato
let scelta = prompt('Digita 0 se vuoi scegliere Pari, digita 1 se vuoi scegliere Dispari: ')
let sceltaNumero = prompt('Inserisci un numero da 1 a 5')

//Variabile somma con invocazione funzione randomNumber()
let somma = Number(sceltaNumero) + randomNumber()

//Funzione per generare un numero casuale
function randomNumber(){
   return Math.floor((Math.random() * 5) + 1)
}

//Funzione per decretare se il risultato della somma è pari o dispari
function pariDispari(result){
    if(result % 2 === 0){
        result = 0
    } else {
        result = 1
    }

    return result
}

//Decretazione finale
if(pariDispari(somma) === Number(scelta)){
    console.log('hai vinto')
} else{
    console.log('hai perso')
}