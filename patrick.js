// // Définition des variables contenant le texte du titre et du paragraphe
// let contenuTitre = "Azertype"
// let contenuParagraphe = "L'application pour apprendre à taper plus vite patrick !"
// let div = `
//     <div>
//         <h1>${contenuTitre}</h1>
//         <p>${contenuParagraphe}</p>
//     </div>
//     `;
// let body = document.querySelector("body")
// body.innerHTML = div
// /**
//  * 
//  * @param {number} number 
//  * @returns {number}
//  */
// function fibonacci(number){
//     let fibonacciNumber = 1
//  for(let i = number; i > 0; i--){
//     fibonacciNumber *= i 
//     console.log (i + "*")
//  }
//  return fibonacciNumber
// }

// btnValiderMot = document.getElementById("btnValiderMot")
// btnValiderMot.addEventListener("click", function(){
//    console.log("tu m'a cliqué")
// })

document.addEventListener('keydown', (event) => {
   console.log(event.key);
});