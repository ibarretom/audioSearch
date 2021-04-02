const audioButton = document.querySelector('button[aria-label="Buscas-voz"]')
const input = document.querySelector('input[aria-label="Buscas"]')
const iconeAudio = document.querySelector('i.fa-microphone-alt')

function adicionarPesquisa(busca) {
    let div = document.querySelector('div.resultado')
    conteudoDiv = `<h1>Pesquisou por: <span style='color:tomato'>${busca}</span></h1>`
    div.innerHTML = conteudoDiv
}

try {
    const recognition = new webkitSpeechRecognition()
    recognition.lang = 'pt-BR'

    recognition.onaudiostart = (e) => {
        iconeAudio.classList.add('microphone-started')
    }
    recognition.onaudioend = (e) => {
        iconeAudio.classList.remove('microphone-started')
    }
    recognition.onresult = (e) => {
        const resultadoSpeech = e.results[0][0].transcript
        input.value = resultadoSpeech
        adicionarPesquisa(resultadoSpeech)
    }

    audioButton.addEventListener('click', (e) => {
        e.preventDefault()
        recognition.start()
    })

} catch (erro) {
    audioButton.style.display = 'none' 
    console.log(erro)
}




