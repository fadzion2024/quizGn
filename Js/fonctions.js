let score = 0;
let joueurNom = "";

function afficherBienvenue() {
    joueurNom = prompt("Quel est ton prénom ?");
    alert("🇬🇳 Bienvenue sur QuizGN\n\n" + joueurNom + "\nDeviens Sage de la Cité !");
}

function afficherConsignes() {
    alert("Consignes\n\nTape uniquement le numéro de la bonne réponse.\n\nExemple : 1, 2, 3 ou 4.");
}

function melangerQuestions() {
    questions.sort(() => Math.random() - 0.5);
}

function verifierReponse(question, reponse) {
    if (question.bonneReponse === reponse) {
        alert("Bonne réponse \n" + question.commentaire);
        alert("Le savais-tu ?\n" + question.savaisTu);
        score++;
        return true;
    } else {
        alert("Mauvaise réponse \nLa bonne réponse était " 
              + question.choix[question.bonneReponse - 1] 
              + "\n" + question.commentaire);
        return false;
    }
}

function afficherResultat() {
    alert("Quiz terminé");
    alert(joueurNom + ", ton score est : " + score + "/" + questions.length);

    if (score === questions.length) {
        alert("Excellent ! Tu es un champion de QuizGN 🎉");
    } else if (score >= questions.length / 2) {
        alert("Bravo ! Tu progresses vers le titre : Citoyen ✨");
    } else {
        alert("Courage ! Continue à apprendre avec QuizGN 📚");
    }
}
