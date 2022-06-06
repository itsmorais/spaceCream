let viewport = window.screen.width

function DesktopChanges(browser_size) {
  let desktopImages = document.getElementsByTagName('main')[0]
  let addText = document.getElementsByTagName('p')[0]

 if (browser_size > 1500) {
   

    desktopImages.innerHTML += `<div class="card">
    <img
      src="./images/sorvete1.png"
      alt="Paleta de morango sobre uma mesa marrom"
    />
    <div class="label">
      <span>Paletas</span>
    </div>
  </div>`

  desktopImages.innerHTML += `<div class="card">
    <img
      src="./images/sorvete4.png"
      alt="Paleta de morango sobre uma mesa marrom"
    />
    <div class="label">
      <span>Paletas</span>
    </div>
  </div>`

  addText.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a rhoncus leo. Donec at scelerisque magna. Nullam vitae neque sit amet erat dignissim cursus ac ac lectus. Aliquam erat volutpat. Praesent at quam aliquet, pharetra est in, sagittis lorem.elit. Donec a rhoncus leo. Donec at scelerisque magna. Nullam vitae neque sit amet erat dignissim cursus ac ac lectus. Aliquam erat volutpat. Praesent at quam aliquet, pharetra est in, sagittis lorem. `
    
  }

  else if(browser_size > 700 && browser_size <1400){
    for(let i = 1; i <= 4; i++){
      let imagesWEB = document.querySelector(`main>div:nth-child(${i})>img`)
      imagesWEB.src = (`./images/sorvete${i}WEB.png`)
    }
    
    desktopImages.innerHTML += `<div class="card">
    <img
      src="./images/sorvete1WEB.png"
      alt="Paleta de morango sobre uma mesa marrom"
    />
    <div class="label">
      <span>Paletas</span>
    </div>
  </div>`

  desktopImages.innerHTML += `<div class="card">
    <img
      src="./images/sorvete4WEB.png"
      alt="Paleta de morango sobre uma mesa marrom"
    />
    <div class="label">
      <span>Paletas</span>
    </div>
  </div>`

  addText.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a rhoncus leo. Donec at scelerisque magna. Nullam vitae neque sit amet erat dignissim cursus ac ac lectus. Aliquam erat volutpat. Praesent at quam aliquet, pharetra est in, sagittis lorem.elit. Donec a rhoncus leo. Donec at scelerisque magna. Nullam vitae neque sit amet erat dignissim cursus ac ac lectus. Aliquam erat volutpat. Praesent at quam aliquet, pharetra est in, sagittis lorem. `
   
  }}

DesktopChanges(viewport)
