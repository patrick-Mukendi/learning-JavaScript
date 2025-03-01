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

    afficherProposition(listeMots[i])
    btnValiderMot.addEventListener("click", ()=>{
        
        console.log(i)
        console.log(listeMots[i])

        if (inputEcriture.value == listeMots[i]){
            score++
        }
        i++

        if(listeMots[i] == undefined){
            afficherProposition("Jeu terminé")
            btnValiderMot.disabled = true
            afficherResultat(score, listeMots.length) 
        }else{
            afficherProposition(listeMots[i] )
        }
        inputEcriture.value = ""
        afficherResultat(score, listeMots.length) 
    })
    
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