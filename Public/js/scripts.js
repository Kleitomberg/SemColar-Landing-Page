//pegamos a navbar ou seja a "Ul"
var navbar = document.getElementById("nav");


//dentro da Ul, pegamos todos os elementos com a class, navlink ou seja os "a"
var links = navbar.getElementsByClassName("nav-link");

//Agora de acordo com a quantidade de links repita um evento de clique na class 
//que foi clicada acionando um evento que abre uma função que executa o processo de pegar as classes active ou seja so tem uma
//então como é um array, pegamos a posição 0 e trocamos por "" 
//ou seja pegamos a classe que tinha activre antes retiramos dela e adicionamos na navlink que foi clicada

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


/** Scroll Reveal */

ScrollReveal().reveal('.home', { delay: 50 });
ScrollReveal().reveal('.sobre', { delay: 150 });
ScrollReveal().reveal('.sobre', { delay: 350 });
ScrollReveal().reveal('.solucao', { delay: 450 });
ScrollReveal().reveal('.contato', { delay: 550 });
ScrollReveal({ reset: true });



 //pega o botão
 var mybutton = document.getElementById("myBtn");

 // função que monitora a rolagem da tela para que quando ela atinga um valor execute a ação de mostar ou ocultar o botão
 window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
   if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 1500) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }

 //
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }