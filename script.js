let viewport = window.screen.width

function DesktopChanges(browser_size){
  let desktopImages = document.getElementsByTagName('main')[0]
  let addText = document.getElementsByTagName('p')[0]

  if(browser_size > 700){
    desktopImages.innerHTML += `<div class="card">
<img
  src="./images/sorvete1.png"
  alt="Paleta de morango sobre uma mesa marrom"
/>
</div>`

desktopImages.innerHTML += `<div class="card">
<img
  src="./images/sorvete4.png"
  alt="Mão segurando um picolé napolitano"
/>
<div class="label">
  <span>Picolés</span>
</div>
</div>`

desktopImages.innerHTML += `<footer>fale concosco no instagram @space_cream</footer>`

addText.innerHTML += 
`lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a rhoncus
leo. Donec at scelerisque magna. Nullam vitae neque sit amet erat
dignissim cursus ac ac lectus. Aliquam erat volutpat. Praesent at quam
aliquet. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a rhoncus
leo. Donec at scelerisque magna. Nullam vitae neque sit amet erat
dignissim cursus ac ac lectus. Aliquam erat volutpat. Praesent at quam
aliquet`
}

}


DesktopChanges(viewport)

