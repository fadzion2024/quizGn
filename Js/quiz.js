function jouerQuiz() {
    for (let i = 0; i < questions.length; i++) {
        alert("Thème :\n" + questions[i].theme);

        let texteQuestion =
            questions[i].question +
            "\n1. " + questions[i].choix[0] +
            "\n2. " + questions[i].choix[1] +
            "\n3. " + questions[i].choix[2] +
            "\n4. " + questions[i].choix[3];

        let reponse = parseInt(prompt(texteQuestion));

        if (!isNaN(reponse) && reponse >= 1 && reponse <= 4) {
            verifierReponse(questions[i], reponse);
        } else {
            alert("Réponse invalide. Tape uniquement 1, 2, 3 ou 4.");
        }
    }
}
