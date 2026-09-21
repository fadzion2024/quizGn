// =====================================
// BOUTON COMMENCER
// =====================================

const btnCommencer = document.querySelector("#btnCommencer");

// Section Accueil
const accueil = document.querySelector("#accueil");

// Section Quiz
const quiz = document.querySelector("#quiz");


btnCommencer.addEventListener("click", demarrerQuiz);


// =====================================
// DÉMARRER LE QUIZ
// =====================================

function demarrerQuiz() {

    // Masquer l'accueil
    accueil.classList.add("cache");

    // Afficher le quiz
    quiz.classList.remove("cache");

    // Réinitialiser la partie
    questionActuelle = 0;
    reponseChoisie = null;

    reinitialiserScore();
    reinitialiserCauris();

    niveau = "Curieux";

    // Nouveau mélange des questions
    melangerQuestions();

    // Réinitialiser le bouton
    etatBouton = "validation";
    btnValider.textContent = TEXTE_VALIDER;
    btnValider.style.display = "block";

    // Afficher la première question
    afficherQuestion();
}