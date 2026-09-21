function afficherScore(){
    scoreActuel.textContent = score;

}

function ajouterPoint(){

    score++;
    verifierNiveau();

    afficherScore();

}


function reinitialiserScore(){
    score = 0;
    afficherScore();
}