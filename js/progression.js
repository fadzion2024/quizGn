// =====================================
// BARRE DE PROGRESSION
// =====================================

function mettreAJourProgression() {

    const progression =
        ((questionActuelle + 1) / questions.length) * 100;

    barreProgression.style.width = progression + "%";

    pourcentageProgression.textContent =
        Math.round(progression) + "%";
}


// =====================================
// AFFICHER LE NIVEAU
// =====================================

function afficherNiveau() {

    niveauActuel.textContent = niveau;

}


// =====================================
// VÉRIFIER LE NIVEAU
// =====================================

function verifierNiveau() {

    // CURIEUX → 🇬🇳 CITOYEN
    if (score >= 3 && niveau === "Curieux") {

        const ancienNiveau = niveau;

        niveau = "Citoyen";
        
        afficherNiveau();
        
        afficherChangementNiveau(
            ancienNiveau,
            niveau
        );
    }


    // 🇬🇳 CITOYEN → GUIDE TOURISTIQUE
    else if (score >= 5 && niveau === "Citoyen") {

        const ancienNiveau = niveau;

        niveau = "Guide touristique";
        
        afficherNiveau();
        
        afficherChangementNiveau(
            ancienNiveau,
            niveau
        );
    }


    // GUIDE TOURISTIQUE → HISTORIEN
    else if (score >= 8 && niveau === "Guide touristique") {

        const ancienNiveau = niveau;

        niveau = "Historien";
        
        afficherNiveau();
        
        afficherChangementNiveau(
            ancienNiveau,
            niveau
        );
    }


    // HISTORIEN → SAGE DE LA CITÉ
    else if (score >= 10 && niveau === "Historien") {

        const ancienNiveau = niveau;

        niveau = "Sage de la cité";
        
        afficherNiveau();
        
        afficherChangementNiveau(
            ancienNiveau,
            niveau
        );
    }

}