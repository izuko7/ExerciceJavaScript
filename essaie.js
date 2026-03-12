
let nombreCaractere = prompt("Combien de caractère voulez-vous ?")

function genererCaracteres(longueur) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-/;,=:+ù%$*&é"(§è!çà)';
  let resultat = '';
  for (let i = 0; i < longueur; i++) {
    resultat += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return resultat;
}
alert(genererCaracteres(nombreCaractere)); // Exemple: "aB3dE5fGhI"





let essai=0;
let continuerPartie = true;

function nombreAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

nombreAleatoire(1, 100); // nombre entre 1 et 10

let result = nombreAleatoire(1,100);
console.log(result);

let nbre = prompt("Enter un nombre"); 
nbre = parseInt(nbre);


while(continuerPartie){
    // essai++;
    if(nbre === result){
        alert("vous avez gagnez !");
        continuerPartie = false;
    }else if(nbre<result){
        essai++
        nbre = prompt("Entrer un nombre plus grand");
        nbre = parseInt(nbre);
    } else {
        essai++
        nbre = prompt("Entrer un nombre plus petit");
        nbre = parseInt(nbre);
    }

    if(essai>=8){
        alert("Ton papa, Tu as eu " + essai + " essaies");
        continuerPartie = false;
    }
}




  








function timer(secondes) {
    if(secondes > 0){
        console.log(secondes);
        timer(secondes-1);
    } else {
        console.log(secondes);
    }
}

timer(10)









if(age < 13){
    console.log(" Jte recommande le film LILO ET STICHT");
} else if(age >= 18) {
    console.log("Jte recommande le fiml EVIL DEAD");
} else {
    console.log("Jte recommande le film MATRIX");
}

try {
    alert(hello);
} catch (error){
    alert(error.stack);
}

let i = 0;

while( i < 10 ) {

    if(i == 8) {
        break;
    }

    console.log("ligne : " + i);
    i++;
}

let gareDeDepart = "Abidjan";
let gareDArriver = "";
let chauffeur = "Chauffaur1";

if ((gareDeDepart != "" || gareDArriver != "") && chauffeur != "") {
    console.log("Le train peut demarer");
} else {
    console.log("Le train ne peut pas demarer");
}

let x = 5;

(x > 3) ? console.log("") : (false);

let superHero = prompt("Donner le nom d'un superhero, je vous dirai si il est de Marvel ou DC comics");

switch(superHero) {

    case 'Iron Man':
    case 'Captain America':
    case 'Thor':
    case 'Hulk':
    case 'Black Panther':
    case 'Spider-Man':
    case 'Ant-Man':
    case 'Captain Marvel':
        alert("C'est un hero Marvel !");
        break;

    case 'Batman':
    case 'Superman':
    case 'Wonder Woman':
    case 'Flash':
    case 'Aquaman':
    case 'Shazam':
    case 'Green Lantern':
        alert("C'est un hero DC Comics !");
        break;

    default:
        alert("Oups revoyer l'écriture !");
}

function demanderAge (){

    let age = prompt("Quel est votre age ?");
    alert ("Votre age est : " + age + " ans.");
    console.log(age)

}

demanderAge();

  let poids = prompt("Quel est votre poids en Kg?");
  let taille = prompt("Quelle est votre taille en m?");
  poids = parseFloat(poids);
  taille = parseFloat(taille);
  console.log(poids, taille);

  function calculerIMC () {

  }

let poids = prompt("Quel est votre poids en Kg?");
let taille = prompt("Quelle est votre taille en m?");

poids = parseFloat(poids);
taille = parseFloat(taille);

console.log(poids, taille);

function calculerIMC() {
    let resultatImc = poids/(taille**2);
    return resultatImc;
}

calculerIMC(poids, taille)

let afficherImc = calculerIMC(poids, taille);

alert("Votre IMC est : " + afficherImc);
console.log(calculerIMC(poids, taille));

let poids = prompt("Quel est votre poids en kg?");
let taille = prompt("Quelle est votre taille en mètre");

function calculerIMC(poids, taille) {

    let tailleCalculer = Math.pow(taille, 2);
    let resultatImc = poids / tailleCalculer;

    return resultatImc;

}

let afficherImc = calculerIMC(poids, taille);
alert("Votre IMC est : " + afficherImc);

console.log(calculerIMC(poids, taille));




let mesFilms = [

    ["Batman", "Euphoria", "Flash", "Kirikou"],
    ["1", "2", "3","4"]

];
console.log(mesFilms);