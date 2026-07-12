let questionActuelle = 0;

// 1. Les cibles du DOM
const numeroQuestion = document.querySelector('#numeroQuestion');
const texteQuestion = document.querySelector('#texteQuestion');
const listeChoix = document.querySelector('#listeChoix');

function afficherQuestion() {

    // Récupère la question actuelle
    const qActuelle = questions[questionActuelle];

    // Affiche le numéro de la question
    numeroQuestion.textContent =
        `Question ${questionActuelle + 1} / ${questions.length}`;

    // Affiche le texte de la question
    texteQuestion.textContent = qActuelle.question;

    // Supprime les anciens boutons
    listeChoix.innerHTML = "";
    console.log(questions);
    console.log(qActuelle);
    // Crée un bouton pour chaque réponse
    qActuelle.choix.forEach((option, indexOption) => {

        const bouton = document.createElement("button");

        bouton.textContent = `${indexOption + 1}. ${option}`;

        bouton.classList.add("btn");

        listeChoix.appendChild(bouton);

    });

}