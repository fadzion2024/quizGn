// =====================================
// VARIABLES D'ÉTAT DU JEU
// =====================================

let questionActuelle = 0;
let questionsMelangees = []; // liste des questions mélangées
let reponseChoisie = null;
let score = 0;
let cauris = 3;
let niveau = "Curieux";


// Etat du bouton
let etatBouton = "validation";

// Constantes
const TEXTE_VALIDER = "Valider";
const TEXTE_SUIVANT = "Question suivante →";



// =====================================
// RÉCUPÉRATION DES ÉLÉMENTS HTML
// =====================================

const numeroQuestion = document.querySelector("#numeroQuestion");
const texteQuestion = document.querySelector("#texteQuestion");
const listeChoix = document.querySelector("#listeChoix");
const btnValider = document.querySelector("#btnValider");
const feedback = document.querySelector("#feedback");
const zoneCauris = document.querySelector("#zoneCauris");
const scoreActuel = document.querySelector("#scoreActuel");
const barreProgression = document.querySelector("#barreProgression");
const pourcentageProgression = document.querySelector("#pourcentageProgression");
const niveauActuel = document.querySelector("#niveauActuel");



// =====================================
// MÉLANGE DES QUESTIONS
// =====================================
function melangerQuestions() {

    questionsMelangees = [...questions];

    questionsMelangees.sort(() => Math.random() - 0.5);

}


// =====================================
// MELANGER REPONSES D'UNE QUESTION
// =====================================

function melangerReponses(question) {

    const reponses = [...question.choix];

    reponses.sort(() => Math.random() - 0.5);

    return reponses;
}

// =====================================
// AFFICHER UNE QUESTION
// =====================================

function afficherQuestion() {

    afficherCauris();
    afficherScore();
    afficherNiveau();

    reponseChoisie = null;

    const qActuelle = questionsMelangees[questionActuelle];

    numeroQuestion.textContent =
        `Question ${questionActuelle + 1} / ${questionsMelangees.length}`;

    texteQuestion.textContent =
        qActuelle.question;

    listeChoix.innerHTML = "";

    const reponsesMelangees = melangerReponses(qActuelle);

    reponsesMelangees.forEach((reponse, index) => {

        const bouton = document.createElement("button");

        bouton.textContent =
            `${index + 1}. ${reponse.texte}`;

        bouton.classList.add("btn");

        bouton.addEventListener("click", () => {

            document
                .querySelectorAll("#listeChoix .btn")
                .forEach(btn =>
                    btn.classList.remove("btn-selectionne")
                );

            bouton.classList.add("btn-selectionne");

            reponseChoisie = reponse.index;

        });

        listeChoix.appendChild(bouton);

    });

    mettreAJourProgression();

}


// =====================================
// VÉRIFIER LA RÉPONSE
// =====================================

function verifierReponse() {

    if (reponseChoisie === null) {
        afficherFeedback(
            "⚠️ Veuillez sélectionner une réponse.",
            "mauvais"
        );
        return;
    }

    // Question actuellement affichée
    const qActuelle = questionsMelangees[questionActuelle];

    // Vérification de la réponse
    if (reponseChoisie === qActuelle.bonneReponse) {

        // Afficher d'abord le commentaire
        afficherFeedback(
            "✅ Bonne réponse !<br><br>" +
            qActuelle.commentaire,
            "bon"
        );

        // Ajouter le point ensuite
        ajouterPoint();

    } else {

        afficherFeedback(
            "❌ Mauvaise réponse.<br><br>" +
            qActuelle.commentaire,
            "mauvais"
        );

        perdreUnCauri();
    }

    etatBouton = "suivant";
    btnValider.textContent = TEXTE_SUIVANT;
}


// =====================================
// QUESTION SUIVANTE
// =====================================

function questionSuivante() {

    feedback.innerHTML = "";

    feedback.className = "feedback cache";

    if (questionActuelle < questionsMelangees.length - 1) {

        questionActuelle++;

        etatBouton = "validation";

        btnValider.textContent = TEXTE_VALIDER;
      

        afficherQuestion();

    } else {

        terminerQuiz(true);

    }

}


// =====================================
// FEEDBACK
// =====================================

function afficherFeedback(message, type) {

    feedback.innerHTML = message;

    feedback.className = "feedback";

    if (type === "bon") {

        feedback.classList.add("feedback-bon");

    } else {

        feedback.classList.add("feedback-mauvais");

    }

    feedback.classList.remove("cache");

}




// =====================================
// FIN DU QUIZ
// =====================================

function terminerQuiz(victoire) {

    numeroQuestion.style.display = "none";
    listeChoix.innerHTML = "";
    btnValider.style.display = "none";

    feedback.classList.add("cache");

    if (victoire) {

        texteQuestion.innerHTML = `
            <div class="ecran-fin victoire">
                <div class="icone-fin">🎉</div>

                <h2>Félicitations !</h2>

                <p>Vous avez terminé cette aventure.</p>

                <div class="resultat-fin">
                    <p>
                        Score :
                        <strong>${score} / ${questionsMelangees.length}</strong>
                    </p>

                    <p>
                        Niveau :
                        <strong>${niveau}</strong>
                    </p>
                </div>

                <p class="message-fin">
                    Merci d'avoir joué à <strong>QuizGN 🇬🇳</strong>.
                </p>

                <button id="btnRejouer" class="btn">
                    🔄 Rejouer
                </button>
            </div>
        `;

    } else {

        texteQuestion.innerHTML = `
            <div class="ecran-fin defaite">
                <div class="icone-fin">😔</div>

                <h2>Oups...</h2>

                <p>Vous avez perdu tous vos cauris.</p>

                <div class="resultat-fin">
                    <p>
                        Score :
                        <strong>${score} / ${questionsMelangees.length}</strong>
                    </p>

                    <p>
                        Niveau :
                        <strong>${niveau}</strong>
                    </p>
                </div>

                <p class="message-fin">
                    L'aventure s'arrête ici...
                </p>

                <button id="btnRejouer" class="btn">
                    🔄 Réessayer
                </button>
            </div>
        `;
    }
}


// =====================================
// GESTION DU BOUTON
// =====================================

btnValider.addEventListener("click", () => {

    if (etatBouton === "validation") {

        verifierReponse();

    } else {

        questionSuivante();

    }

});


// =====================================
// REJOUER LE QUIZ
// =====================================

function rejouer() {

    // Réinitialiser la partie
    questionActuelle = 0;
    reponseChoisie = null;
    reinitialiserScore();
    reinitialiserCauris();
    niveau = "Curieux";

    // Nouveau mélange des questions
    melangerQuestions();

    // Réafficher les éléments du quiz
    numeroQuestion.style.display = "block";
    btnValider.style.display = "block";

    // Réinitialiser le bouton
    etatBouton = "validation";
    btnValider.textContent = TEXTE_VALIDER;

    // Réinitialiser les affichages
    afficherScore();
    afficherCauris();
    afficherNiveau();

    // Afficher la première question
    afficherQuestion();
}


// =====================================
// GESTION DU BOUTON REJOUER
// =====================================

document.addEventListener("click", (event) => {

    if (event.target.id === "btnRejouer") {
        rejouer();
    }

});