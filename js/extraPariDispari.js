const submitButton = document.querySelector('#playGame')

//Funzione per determinare se il risultato è pari
function isEven(number){
    return number % 2 === 0
}

//Funzione per generare un numero casuale
function randomNumber(){
    return Math.floor((Math.random() * 5) + 1)
}

//Funzione per far partire il gioco
submitButton.addEventListener('click', function(event){
    //Blocco del refresh
    event.preventDefault()

    const userChoice = document.querySelector('#choose').value
    const userNumber = Number(document.querySelector('#sceltaNumero').value)


    const numberRandom = randomNumber()
    const somma = userNumber + numberRandom
    const sommaIsEven = isEven(somma)
    const userChoiseIsEven = userChoice === 'Pari'

    //Risposta nell'errore di input da parte dell'utente
    if (userNumber < 1 || userNumber > 5 || isNaN(userNumber)) {
        document.getElementById("result").innerHTML = "<div class='alert alert-danger'>Inserisci un numero valido tra 1 e 5.</div>"
        return
    }

    //Risultato del gioco
    let resultMessage 
    let gameResult
    let classResult
    if ((sommaIsEven && userChoiseIsEven) || (!sommaIsEven && !userChoiseIsEven)) {
        resultMessage = `<div class='alert alert-success mt-3'>Hai vinto!</div>`
        gameResult = 'Vittoria'
        classResult = 'vittoria'
    } else {
        resultMessage = `<div class='alert alert-danger mt-3'>Hai perso!</div>`
        gameResult = 'Sconfitta'
        classResult = 'sconfitta'
    }
    document.getElementById('result').innerHTML = resultMessage

    //Inserimento del risultato nello storico tramite una lista
    const historyList = document.querySelector('#historyList')
    const listItem = document.createElement('li')
    listItem.innerHTML = `<strong>${gameResult}</strong>`
    listItem.classList.add(classResult)
    historyList.appendChild(listItem)

}) 
