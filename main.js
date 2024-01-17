const ingressos = [];

function addRedBorder(id)
{
   Element = document.querySelector(`#${id})`);
   Element.style.border = "5px solid red";
}


function highlightCard(selector)
{
   var Element = document.querySelector(selector);
   Element.classList.toggle("card-highlight");
}

function checkKeyboardCode()
{
   document.addEventListener('keydown', (event) => {
      var name = event.key;
      var code = event.code;
      alert(`Key pressed ${name} \r\n Key code value: ${code}`);
   }, false);
}



function addKeyboardEventListeners()
{
   document.addEventListener('keydown', (event) =>{
      
      var ingresso1 = document.getElementById("quinta");
      var ingresso2 = document.getElementById("sexta");
      var ingresso3 = document.getElementById("esgotado");
      var ingresso4 = document.getElementById("domingo");


      var code = event.code;
      if(code == 'Numpad1') {
         ingresso1.classList.toggle("card-highlight");
         ingresso2.classList.remove("card-highlight");
         ingresso3.classList.remove("card-highlight");
         ingresso4.classList.remove("card-highlight");
      }

      if(code == 'Numpad2') {
         ingresso1.classList.remove("card-highlight");
         ingresso2.classList.toggle("card-highlight");
         ingresso3.classList.remove("card-highlight");
         ingresso4.classList.remove("card-highlight");
      }

      if(code == 'Numpad3') {
         ingresso1.classList.remove("card-highlight");
         ingresso2.classList.remove("card-highlight");
         ingresso3.classList.toggle("card-highlight");
         ingresso4.classList.remove("card-highlight");
      } 
      
      if(code == 'Numpad4') {
         ingresso1.classList.remove("card-highlight");
         ingresso2.classList.remove("card-highlight");
         ingresso3.classList.remove("card-highlight");
         ingresso4.classList.toggle("card-highlight");
      }   
      
   }, 
   false
  );
}

selectCard = (selector) => {
   var Element = document.querySelector(selector);
   Element.classList.toggle("card-selected");
   if(ingressos.includes(selector)) ingressos.pop(selector);
   else ingressos.push(selector)
}

showSelectedCards = () =>
{
   if(ingressos.lenght > 0) alert("Ingressos Selecionados:" + ingressos);
}

addKeyboardEventListeners();






