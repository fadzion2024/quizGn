let nom = prompt("Quel est votre prénom ?");

alert("Bienvenue " + nom + " sur QuizGN !");
let score = 0; // déclaration de la variable score


const questions = [

        {
        theme: "Géographie",
        
        question: "Quelle est la capitale de la Guinée ?",
        
        choix: [
            "Labé",
            "Conakry",
            "Kankan",
            "N'Zérékoré"
        ],
        
        bonneReponse: "Conakry",
        
        commentaire:
        "Conakry est la capitale et la plus grande ville de la Guinée.",
        
        savaisTu:
        "Conakry est située sur la presqu'île de Kaloum, au bord de l'océan Atlantique."
        },
        
        {
        theme: "Histoire",
        
        question: "En quelle année la Guinée a-t-elle obtenu son indépendance ?",
        
        choix: [
            "1956",
            "1958",
            "1960",
            "1962"
        ],
        
        bonneReponse: "1958",
        
        commentaire:
        "La Guinée est devenue indépendante le 2 octobre 1958.",
        
        savaisTu:
        "La Guinée est le premier territoire d'Afrique francophone à avoir voté 'NON' au référendum de 1958."
        },
        
        {
        theme: "Culture",
        
        question: "Quelle est la langue officielle de la Guinée ?",
        
        choix: [
            "Le Soussou",
            "Le Peul",
            "Le Français",
            "Le Malinké"
        ],
        
        bonneReponse: "Le Français",
        
        commentaire:
        "Le français est la langue officielle de la République de Guinée.",
        
        savaisTu:
        "La Guinée compte de nombreuses langues nationales parlées selon les régions."
        },
        
        {
        theme: "Géographie",
        
        question: "Quel grand fleuve prend sa source en Guinée ?",
        
        choix: [
            "Le Nil",
            "Le Niger",
            "Le Congo",
            "Le Zambèze"
        ],
        
        bonneReponse: "Le Niger",
        
        commentaire:
        "Le fleuve Niger prend sa source dans les montagnes de Guinée.",
        
        savaisTu:
        "Le Niger traverse ensuite plusieurs pays d'Afrique de l'Ouest avant de se jeter dans le golfe de Guinée."
        },
        
        {
        theme: "Patrimoine",
        
        question: "Comment appelle-t-on souvent la Guinée en raison de ses nombreuses sources de fleuves ?",
        
        choix: [
            "Le Château d'eau de l'Afrique",
            "Le Jardin de l'Afrique",
            "La Terre Rouge",
            "Le Royaume des Fleuves"
        ],
        
        bonneReponse: "Le Château d'eau de l'Afrique",
        
        commentaire:
        "La Guinée est surnommée 'le Château d'eau de l'Afrique'.",
        
        savaisTu:
        "Les fleuves Niger, Sénégal et Gambie prennent leur source sur le territoire guinéen."
        },
        
        {
        theme: "Culture",
        
        question: "Quel instrument de musique est traditionnellement utilisé par les griots ?",
        
        choix: [
            "La Kora",
            "La Guitare",
            "Le Piano",
            "Le Violon"
        ],
        
        bonneReponse: "La Kora",
        
        commentaire:
        "La Kora est un instrument emblématique des griots d'Afrique de l'Ouest.",
        
        savaisTu:
        "La Kora possède généralement 21 cordes."
        },
        
        {
        theme: "Sport",
        
        question: "Comment s'appelle l'équipe nationale de football de la Guinée ?",
        
        choix: [
            "Les Éléphants",
            "Les Lions",
            "Le Syli National",
            "Les Léopards"
        ],
        
        bonneReponse: "Le Syli National",
        
        commentaire:
        "L'équipe nationale de football de la Guinée est le Syli National.",
        
        savaisTu:
        "Le mot 'Syli' signifie 'Éléphant' dans une langue nationale."
        },
        
        {
        theme: "Économie",
        
        question: "Quel minerai fait la renommée internationale de la Guinée ?",
        
        choix: [
            "Le Fer",
            "L'Or",
            "La Bauxite",
            "Le Cuivre"
        ],
        
        bonneReponse: "La Bauxite",
        
        commentaire:
        "La Guinée possède parmi les plus importantes réserves de bauxite au monde.",
        
        savaisTu:
        "La bauxite est utilisée pour fabriquer l'aluminium."
        },
        
        {
        theme: "Patrimoine",
        
        question: "Quel est le plus haut sommet de la Guinée ?",
        
        choix: [
            "Mont Loura",
            "Mont Gangan",
            "Mont Nimba",
            "Mont Kakoulima"
        ],
        
        bonneReponse: "Mont Nimba",
        
        commentaire:
        "Le Mont Nimba est le point culminant de la Guinée.",
        
        savaisTu:
        "Le Mont Nimba est classé au patrimoine mondial de l'UNESCO pour sa biodiversité exceptionnelle."
        },
        
        {
        theme: "Institutions",
        
        question: "Quelle est la devise de la République de Guinée ?",
        
        choix: [
            "Liberté - Égalité - Fraternité",
            "Travail - Justice - Solidarité",
            "Travail - Solidarité - Argent",
            "Paix - Travail - Patrie"
        ],
        
        bonneReponse:  "Travail - Justice - Solidarité",
        
        commentaire:
        "La devise officielle de la Guinée est 'Travail - Justice - Solidarité'.",
        
        savaisTu:
        "Cette devise figure sur les armoiries officielles de la République de Guinée."
        }
    
    ];

    // Afficher les questions
    for(let i=0;i<questions.length;i++){

        alert("thème :\n"+questions[i].theme);    
        let texteQuestion =

            questions[i].question +
            
            "\n1. " + questions[i].choix[0] +
            
            "\n2. " + questions[i].choix[1] +
            
            "\n3. " + questions[i].choix[2] +
            
            "\n4. " + questions[i].choix[3];

            reponseUtilisateur = prompt(texteQuestion);
        
        if(reponseUtilisateur.trim().toLowerCase() === questions[i].bonneReponse.trim().toLowerCase()){
            alert("Bonne réponse \n "+ questions[i].commentaire);
            alert("le savais - tu ?\n"+questions[i].savaisTu);
            score++;
        }
        else{
            alert("Mauvaise réponse \nla bonne réponse était "+questions[i].bonneReponse+"\n"+ questions[i].commentaire);
        }
        
        alert("Score : " + score);
    }
    
    alert("Quiz terminé");

    alert("Votre score est : "+score+"/"+questions.length);

    alert("Merci d'avoir joué à QuizGN\nTu progresses vers le titre : Citoyen");
    
