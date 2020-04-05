let count = 0

imgKanan = () => {
    document.getElementById('textJourney').innerHTML =
        `<h1 id="text-kanan" class="big-text-opacity-0 text-white">Since 2017</h1>`
    setTimeout(() => {
        document.getElementById('text-kanan').style.opacity = '1'
    }, 1)
    count = 1
}
imgTengah = () => {
    document.getElementById('textJourney').innerHTML =
        `<h1 id="text-tengah" class="big-text-opacity-0 text-white">2017-2019</h1>`
    setTimeout(() =>{
        document.getElementById('text-tengah').style.opacity = '1'
    }, 1)
    count = 1
}
imgKiri = () => {
    document.getElementById('textJourney').innerHTML =
        `<h1 id="text-kiri" class="big-text-opacity-0 text-white">2019-Now</h1>`
    setTimeout(()=> {
        document.getElementById('text-kiri').style.opacity = '1'
    }, 1)
    count = 1
}
utamaText = () => {
    if (count != 0) {
        document.getElementById('textJourney').innerHTML =
            `<h1 id="h1Main" style="text-align: center;
            font-size: 74px;
            font-family: serif !important; opacity:0; transition: 0.5s;" class="text-white blink">Our Journey</h1>`
        setTimeout(function () {
            document.getElementById('h1Main').style.opacity = '1'
        }, 1)
        count = 0
    }
}