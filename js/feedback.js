// =====================================
// BOÎTE DE DIALOGUE DE CHANGEMENT DE NIVEAU
// =====================================

function afficherChangementNiveau(ancienNiveau, nouveauNiveau) {

    const boite = document.createElement("div");

    boite.classList.add("boite-niveau");

    boite.innerHTML = `
        <div class="contenu-niveau">

            <div class="icone-niveau">
                🎉
            </div>

            <h2>Nouveau niveau !</h2>

            <p>Félicitations !</p>

            <div class="ancien-niveau">
                ${ancienNiveau}
            </div>

            <div class="fleche-niveau">
                ↓
            </div>

            <div class="nouveau-niveau">
                ${nouveauNiveau}
            </div>

            <button id="btnFermerNiveau" class="btn">
                Continuer l'aventure
            </button>

        </div>
    `;

    document.body.appendChild(boite);


    // Bouton pour fermer la boîte
    const btnFermer = document.querySelector("#btnFermerNiveau");

    btnFermer.addEventListener("click", () => {

        boite.remove();

    });

}