// =====================================
// AFFICHER LES CAURIS
// =====================================

function afficherCauris() {

    zoneCauris.innerHTML="";

    for(let i=0; i<3; i++){
        const img = document.createElement("img");
        img.src = "assets/icones/cauris1.png";
        img.alt = "Cauri";
        img.classList.add("cauri");

        // Si ce cauri est perdu, on le masque
        if(i >= cauris){
            img.style.opacity = "0.3";   // grisé
        }

        zoneCauris.appendChild(img);
    }

}


// =====================================
// PERDRE UN CAURI
// =====================================

function perdreUnCauri() {

    if (cauris > 0) {

        cauris--;

    }

    afficherCauris();

    if (cauris === 0) {

        terminerQuiz(false);

    }

}


function reinitialiserCauris(){
    cauris = 3;
    afficherCauris();
}