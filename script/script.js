function abrirmenu() {
    let barraMenuAberto = document.getElementById('barra-menu')
    if(barraMenuAberto.style.width !== "0px") {
      barraMenuAberto.style.width = "0px" 
    } else {
      barraMenuAberto.style.width = "180px"
    }
}


  function rolarParaSecao(element) {
    var secaoDesejada = document.getElementById(element);
    secaoDesejada.scrollIntoView({ behavior: "smooth" });
  }


function ativarLetra(element) {
    const arrText = element.textContent.split('')
    element.textContent = ''
    arrText.forEach((letra, i) => {
      setTimeout(() =>{
        element.textContent += letra;
      }, 75 * i)
    });
  }
  
  const titulo = document.querySelector('.digitando')
  
  ativarLetra(titulo)
  