// Bouton Commencer
const btnCommencer = document.querySelector("#btnCommencer");

// Section Accueil
const accueil = document.querySelector("#accueil");

// Section Quiz
const quiz = document.querySelector("#quiz");

const btnRetour= document.getElementById("btnRetour");

btnCommencer.addEventListener("click", demarrerQuiz);

function demarrerQuiz(){

    // Masquer l'accueil
    accueil.classList.add("cache");

    // Afficher le quiz
    quiz.classList.remove("cache");

    // Afficher la première question
    afficherQuestion();

}

btnRetour.addEventListener("click",()=>{
    quiz.classList.add("cache");

    accueil.classList.remove("cache");
})