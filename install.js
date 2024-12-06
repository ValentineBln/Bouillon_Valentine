const installBtn = document.querySelector("#installButton")
let deferredPrompt

window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault()
    deferredPrompt = event
    installBtn.style.display = 'block'
})

installBtn.addEventListener('click', async (event) => {
    event.preventDefault()

    if(deferredPrompt) {
        deferredPrompt.prompt()
        const choiceuser = await deferredPrompt.userChoice
        if (choiceuser === 'accepted') {
            installBtn.style.display = "none"
        }
        deferredPrompt = null
    }
})

window.addEventListener('appinstalled', () => {
    installBtn.style.display = "none"
})