let keys = document.querySelectorAll('kbd');

console.log(keys)

document.addEventListener('keydown', (e) => {
        if(e.code === 'KeyA') {
            let audio = new Audio('audio/A.mp3')
            audio.play();
        } else if (e.code === 'KeyS') {
            let audio = new Audio('audio/S.mp3')
            audio.play();
        } else if (e.code === 'KeyD') {
            let audio = new Audio('audio/D.mp3')
            audio.play();
        } else if (e.code === 'KeyF') {
            let audio = new Audio('audio/F.mp3')
            audio.play();
        } else if (e.code === 'KeyG') {
            let audio = new Audio('audio/G.mp3')
            audio.play();
        } else if (e.code === 'KeyH') {
            let audio = new Audio('audio/H.mp3');
            audio.play();
        } else if (e.code === 'KeyJ') {
            let audio = new Audio('audio/J.mp3')
            audio.play();
        } else if (e.code === 'KeyW') {
            let audio = new Audio('audio/W.mp3')
            audio.play();
        } else if (e.code === 'KeyE') {
            let audio = new Audio('audio/E.mp3')
            audio.play();
        } else if (e.code === 'KeyT') {
            let audio = new Audio('audio/T.mp3')
            audio.play();
        } else if (e.code === 'KeyY') {
            let audio = new Audio('audio/Y.mp3')
            audio.play();
        } else if (e.code === 'KeyU') {
            let audio = new Audio('audio/U.mp3')
            audio.play();
        } else {
            console.log("Wrong key")
        }
    })