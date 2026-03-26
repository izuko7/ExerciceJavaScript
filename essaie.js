let nbre = prompt('Entrer plusieurs nombres')
nbre=nbre.split(" ").map(Number)

function addition(...nombre){
    let resultat = 0;

    nombre.forEach(nombre => {
        resultat += nombre;
    });
    console.log(resultat)
}

addition(...nbre);

// let utilisateurs = new Map();

// utilisateurs.set('Iphone',{
//     serie : '12',
//     stockage : '128gb',
//     taille : '14pc Oled',
// })

// utilisateurs.set('Xiaomi',{
//     serie : 'P64',
//     stockage : '64gb',
//     taille : '14pc',
// })

// utilisateurs.set('Tecno',{
//     serie : 'Camon 40',
//     stockage : '128gb',
//     taille : '16pc',
// })

// utilisateurs.delete('Tecno')

// console.log(utilisateurs)












// list1 = ["alice@gmail.com", "bob@yahoo.fr", "charles@outlook.com"]
// list2 = ["bob@yahoo.fr", "denis@gmail.com", "alice@gmail.com"]
// console.log(list1)
// console.log(list2)

// let guestList = new Set(list1, list1)
// guestList.add("eve@icloud.com")
// guestList.delete("denis@gmail.com")

// if (guestList.has("charles@outlook.com")) {
//     console.log("le mail est bien là ")
// }else{
//     console.log("le mail n'est pas là")
// }


// console.log("il y'a " + guestList.size + " invité")
// console.log(guestList)
// console.log(Array.from(guestList));





// const nbre = prompt("Entrer des nombre")

// console.log(nbre.split(" "))

// const newNombre = nbre.split(" ")

// const tab = newNombre.map((i) => parseInt(i))
// console.log(tab)

// function sommeTableau(tab){
//     if (tab.length === 0){
//         return 0;
//     }else{
//         return tab[0] + sommeTableau(tab.slice(1));
//     }
// }

// console.log(sommeTableau(tab))
// let mesFilms = {
//     titre : 'Batman',
//     duree : 3540,
//     type : 'aventure',
//     aboyer: function()  {
//         console.log("ouaf ouaf");
//      }
// }
// console.log(mesFilms)
// mesFilms.aboyer()

// function timer (secondes) {
//     if(secondes > 0){
//         console.log(secondes)
//         timer(secondes - 1)
//     } else {
//         console.log(secondes)
//     }
// }

// timer(10);

// const tab = ['1', '2', '3', '4']
// console.log(tab)

// // function nbrToString (x){
// //     return x.toString()
// // }

// const tab2 = tab.map((i) => parseInt(i))

// console.log(tab2)

// function sommeTableau(tab){
//     if (tab === ([])){
//         console.log(tab)
//         sommeTableau(tab[0].lenght + )
//     }else{
//         console.log(tab)
//     }
// }

// let tab = [4,10,6]

// function sommeTableau(tab){
//     if (tab.length === 0){
//         return 0;

//     }else{
//         return tab[0] + sommeTableau(tab.slice(1));
        
//     }
// }

// console.log(sommeTableau(tab))


// let tab = [1, 3, 2];

// function sommeTableau(tab) {
//     if (tab.length === 0) {
//         return 0; // Cas de base : le tableau est vide
//     } else {
//         // On prend le premier chiffre + on recommence avec le reste
//         return tab[0] + sommeTableau(tab.slice(1));
//     }
// }

// // On affiche le résultat de l'appel avec notre variable 'tab'
// console.log(sommeTableau(tab)); // Affiche : 6



























// let panier = ['fraise', 'banane', 'poire', 'orange']

// for (const fruit of panier) {
//     console.log(fruit)
//     console.log(panier.indexOf(fruit))
// }
// console.log(panier)

// addition(3,8)

// function addition(a,b){
//     console.log(a+b);
// }

// addition(5,10)

// const additionFlechee = (a,b) => console.log(a*b);

// additionFlechee(3,3)















// let leTableau = ["Mark", "Jean", "Victor", "Paul"]
// leTableau.push('Kouamé')
// leTableau.unshift('Ami')
// leTableau.pop()
// console.log(leTableau)
// console.log(leTableau.indexOf('Mark'))

// let tableau1 = ["1", "2", "3", "4", "5", "6"]
// tableau1.splice(1, 3, "10")
// console.log(tableau1)

// let Tableau2D = [
//     ["Jeff", "Bill", "Cole"],
//     ["Bezos", "Gate", "Palmer"]
// ]

// Tableau2D.splice(2, 0, ['10', '20', '30'])
// console.log(Tableau2D)

// let monTableauAssociatif = {
//     'prenom' : 'Cole',
//     'nom' : 'Palmer',
//     'poste' : 'Ailier'
// }
//monTableauAssociatif['nom'] = 'Jinir'
//delete(monTableauAssociatif.prenom)
//console.log(monTableauAssociatif)
// 

// let listeMots = ["Pétunia", "Cachalot", "Serviette" , "Gros"]
// let listePhrases = ["La vie, l'univers et le reste", "Merci pour le poisson", "Pas de Panique"]
// let score = 0
// let choix

// while( choix !== "mots" && choix !== "phrases"){
//      choix = prompt("Faite un choix entre mots et phrases")
// }

// if(choix === "mots"){
//     for(let i = 0; i < listeMots.length; i++){
//         let motUtilisateurs = prompt("Entrer le mot : " + listeMots[i])
//         if(motUtilisateurs === listeMots[i]){
//             score++
//         }
//     }
//     alert("bravo votre sscore est : " + score)
    
// } else{
//     for(let i = 0; i < listePhrases.length; i++){
//         let motUtilisateurs = prompt("Entrer la phrase : " + listePhrases[i])
//         if(motUtilisateurs === listePhrases[i]){
//             score++
//         }
//     }
//     alert("bravo votre sscore est : " + score)
// }

// if(choix === "mots"){
//     for(let i; listeMots.length[i]; i++){
//         motUtilisateurs = prompt("Entrer le mot : " + listeMots[i])
//         if(motUtilisateurs === listeMots[i]){
//         score++
//         }
//     }
// }
// let motUtilisateurs = prompt("Entrer le mot : " + listeMots[0])

// if(motUtilisateurs === listeMots[0]){
//     score++
// }

// motUtilisateurs = prompt("Entrer le mot : " + listeMots[1])
// if(motUtilisateurs === listeMots[1]){
//     score++
// }

// motUtilisateurs = prompt("Entrer le mot : " + listeMots[2])
// if(motUtilisateurs === listeMots[2]){
//     score++
// }

// motUtilisateurs = prompt("Entrer le mot : " + listeMots[3])
// if(motUtilisateurs === listeMots[3]){
//     score++
// }

// if(score > 2){
//     alert("Bravo votre score est : " + score)
// } else{
//     alert("Faite plus d'effort votre score est : " + score)
// }



// let nombreCaractere = prompt("Combien de caractère voulez-vous ?")

// function genererCaracteres(longueur) {
//   const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-/;,=:+ù%$*&é"(§è!çà)';
//   let resultat = '';
//   for (let i = 0; i < longueur; i++) {
//     resultat += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
//   }
//   return resultat;
// }
// alert(genererCaracteres(nombreCaractere)); // Exemple: "aB3dE5fGhI"





// let essai=0;
// let continuerPartie = true;

// function nombreAleatoire(min, max) {
//   return Math.floor(Math.random() * (max - min + 1));
// }

// nombreAleatoire(1, 10); // nombre entre 1 et 10

// let result = nombreAleatoire(1,100);
// console.log(nombreAleatoire(1,10))
// console.log(result);

// let nbre = prompt("Enter un nombre"); 
// nbre = parseInt(nbre);


// while(continuerPartie){
//     // essai++;
//     if(nbre === result){
//         alert("vous avez gagnez !");
//         continuerPartie = false;
//     }else if(nbre<result){
//         essai++
//         nbre = prompt("Entrer un nombre plus grand");
//         nbre = parseInt(nbre);
//     } else {
//         essai++
//         nbre = prompt("Entrer un nombre plus petit");
//         nbre = parseInt(nbre);
//     }

//     if(essai>=8){
//         alert("Ton papa, Tu as eu " + essai + " essaies");
//         continuerPartie = false;
//     }
// }
// console.log(result);

// let nbre = prompt("Enter un nombre"); 
// nbre = parseInt(nbre);


// while(continuerPartie){
//     // essai++;
//     if(nbre === result){
//         alert("vous avez gagnez !");
//         continuerPartie = false;
//     }else if(nbre<result){
//         essai++
//         nbre = prompt("Entrer un nombre plus grand");
//         nbre = parseInt(nbre);
//     } else {
//         essai++
//         nbre = prompt("Entrer un nombre plus petit");
//         nbre = parseInt(nbre);
//     }

//     if(essai>=8){
//         alert("Ton papa, Tu as eu " + essai + " essaies");
//         continuerPartie = false;
//     }
// }




  








// function timer(secondes) {
//     if(secondes > 0){
//         console.log(secondes);
//         timer(secondes-1);
//     } else {
//         console.log(secondes);
//     }
// }

// timer(10)









// if(age < 13){
//     console.log(" Jte recommande le film LILO ET STICHT");
// } else if(age >= 18) {
//     console.log("Jte recommande le fiml EVIL DEAD");
// } else {
//     console.log("Jte recommande le film MATRIX");
// }

// try {
//     alert(hello);
// } catch (error){
//     alert(error.stack);
// }

// let i = 0;

// while( i < 10 ) {

//     if(i == 8) {
//         break;
//     }

//     console.log("ligne : " + i);
//     i++;
// }

// let gareDeDepart = "Abidjan";
// let gareDArriver = "";
// let chauffeur = "Chauffaur1";

// if ((gareDeDepart != "" || gareDArriver != "") && chauffeur != "") {
//     console.log("Le train peut demarer");
// } else {
//     console.log("Le train ne peut pas demarer");
// }

// let x = 5;

// (x > 3) ? console.log("") : (false);

// let superHero = prompt("Donner le nom d'un superhero, je vous dirai si il est de Marvel ou DC comics");

// switch(superHero) {

//     case 'Iron Man':
//     case 'Captain America':
//     case 'Thor':
//     case 'Hulk':
//     case 'Black Panther':
//     case 'Spider-Man':
//     case 'Ant-Man':
//     case 'Captain Marvel':
//         alert("C'est un hero Marvel !");
//         break;

//     case 'Batman':
//     case 'Superman':
//     case 'Wonder Woman':
//     case 'Flash':
//     case 'Aquaman':
//     case 'Shazam':
//     case 'Green Lantern':
//         alert("C'est un hero DC Comics !");
//         break;

//     default:
//         alert("Oups revoyer l'écriture !");
// }

// function demanderAge (){

//     let age = prompt("Quel est votre age ?");
//     alert ("Votre age est : " + age + " ans.");
//     console.log(age)

// }

// demanderAge();

//   let poids = prompt("Quel est votre poids en Kg?");
//   let taille = prompt("Quelle est votre taille en m?");
//   poids = parseFloat(poids);
//   taille = parseFloat(taille);
//   console.log(poids, taille);

//   function calculerIMC () {

//   }

// let poids = prompt("Quel est votre poids en Kg?");
// let taille = prompt("Quelle est votre taille en m?");

// poids = parseFloat(poids);
// taille = parseFloat(taille);

// console.log(poids, taille);

// function calculerIMC() {
//     let resultatImc = poids/(taille**2);
//     return resultatImc;
// }

// calculerIMC(poids, taille)

// let afficherImc = calculerIMC(poids, taille);

// alert("Votre IMC est : " + afficherImc);
// console.log(calculerIMC(poids, taille));

// let poids = prompt("Quel est votre poids en kg?");
// let taille = prompt("Quelle est votre taille en mètre");

// function calculerIMC(poids, taille) {

//     let tailleCalculer = Math.pow(taille, 2);
//     let resultatImc = poids / tailleCalculer;

//     return resultatImc;

// }

// let afficherImc = calculerIMC(poids, taille);
// alert("Votre IMC est : " + afficherImc);

// console.log(calculerIMC(poids, taille));
