const submitButton = document.querySelector('#submit')

//Funzione che guarda se la parola e il suo inverso sono uguali
function isPali(wordInput){
    return wordInput === wordInput.split('').reverse().join('')
}

submitButton.addEventListener('click', function(event){
    event.preventDefault()

    const userWord = document.querySelector('#word').value

    const userWordIsPali = isPali(userWord)

    let resultMessage
    let risultato
    let classResult
    if(userWordIsPali){
        resultMessage = `<div class='alert alert-success mt-3'>E' Palindroma</div>`
        risultato = 'Palindroma'
        classResult = 'si'
    } else{
        resultMessage = `<div class='alert alert-success mt-3'>Non è Palindroma</div>`
        risultato = 'Non Palindroma'
        classResult = 'no'
    }

    document.querySelector('#result').innerHTML = resultMessage

    const historyList = document.querySelector('#historyList')
    const listElement = document.createElement('li')
    listElement.innerHTML = `<strong>${userWord}</strong>: ${risultato}`
    listElement.classList.add(classResult)
    historyList.appendChild(listElement)
})