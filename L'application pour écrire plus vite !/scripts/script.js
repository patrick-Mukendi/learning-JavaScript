/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

function lancerJeu() {
    // Initialisations
    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    let i = 0;
    let score = 0;
    let listChoices = listeMots

    afficherProposition(listChoices[i])
    btnValiderMot.addEventListener("click", ()=>{
        
        console.log(i)
        console.log(listChoices[i])

        if (inputEcriture.value == listChoices[i]){
            score++
        }
        i++

        if(listChoices[i] == undefined){
            afficherProposition("Jeu terminé")
            btnValiderMot.disabled = true
            afficherResultat(score, listChoices.length) 
        }else{
            afficherProposition(listChoices[i] )
        }
        inputEcriture.value = ""
        afficherResultat(score, listChoices.length) 
    })

    let optionSource = document.querySelectorAll("input[name=optionSource]")
    console.log(optionSource)

    for(let i = 0; i < optionSource.length; i++){
        optionSource[i].addEventListener("change", (event) => {
            if(event.target.value === "1"){
                listChoices = listeMots
            }else{
                listChoices = listePhrases
            }
            afficherProposition(listChoices[i])
        })
     }
 

    
}

/**
 * @param {string} mot: le mot à afficher
 * @returns {string}: afficher ce mot dans la div zoneProposition
 */
afficherProposition = (mot)=>{
    let zoneProposition = document.querySelector(".zoneProposition")
    return zoneProposition.innerHTML = `<p>${mot}</p>`
}

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
    let spanZone = document.querySelector(".zoneScore span")
    spanContent = `${score} / ${nbMotsProposes}`
    spanZone.innerText = spanContent
    console.log("Votre score est de " + score + " sur " + nbMotsProposes)
}