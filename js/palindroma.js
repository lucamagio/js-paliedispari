//Scelta della parola all'utente
let word = prompt('Inserisci una parola: ')

//Funzione che guarda se la parola e il suo inverso sono uguali
function isPali(wordInput){
    return wordInput === wordInput.split('').reverse().join('')
}

//Stamap del risultato a seconda del risultato della Funzione
if (isPali(word)){
    console.log(`${word} è palindroma`)
} else{
    console.log(`${word} non è palindroma`)
}
