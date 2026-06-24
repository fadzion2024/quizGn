let nom = prompt("Quel est votre prénom ?");

alert("Bienvenue " + nom + " sur QuizGN !");
let score = 0; // déclaration de la variable score
let reponseUtilisateur = "Conakry"; // déclaration de la variable reponseUtilisateur

const questions = [ // déclaration des questions

        {
            theme : "Géographie",
            
            question :"Quelle est la capitale de la Guinée ?",
            
            choix : ["Labé","Conakry","Kindia","Kankan"],
            
            bonneReponse :"Conakry"
        },
        
        {
            theme : "Histoire",
            
            question :
            "En quelle année la Guinée est devenue indépendante ?",
            
            choix :
            ["1956","1958","1960","1962"],
            
            bonneReponse :
            "1958"
        },
    
        {
            theme : "Culture",
            
            question :
            "Quel est l'instrument emblématique des griots ?",
            
            choix :
            ["Balafon","Kora","Tambour","Flûte"],
            
            bonneReponse :
            "Kora"
            }
    
    ];

    // Afficher les questions
    for(let i=0;i<questions.length;i++){

            let texteQuestion =

            questions[i].question +
            
            "\n1. " + questions[i].choix[0] +
            
            "\n2. " + questions[i].choix[1] +
            
            "\n3. " + questions[i].choix[2] +
            
            "\n4. " + questions[i].choix[3];

            reponseUtilisateur = prompt(texteQuestion);
        
        if(reponseUtilisateur === questions[i].bonneReponse){
            alert("Bonne réponse");
            score++;
        }
        else{
            alert("Mauvaise réponse");
        }
        
        alert("Score : " + score);
    }
    
    alert("Quiz terminé");

    alert("Votre score est : "+score+"/"+questions.length);

    alert("Merci d'avoir joué à QuizGN")

    alert("Tu progresses vers le titre : Citoyen")
    
