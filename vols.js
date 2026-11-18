// =====================================================
// Mes exercices JavaScript : une liste de vols ✈️
// Pour lancer : node vols.js
// =====================================================


// ===== 1. Fonctions : le prix d'un billet =====

// Rend 35 € si on prend un bagage, sinon 0 €
function prixBagage(avecBagage = false){
    if(avecBagage){
    return 35;
     } else {
        return 0
    }
}

// Enlève 15 % au prix (réduction étudiant)
const prixEtudiant = (prix) =>
    prix -(prix*15)/100

// Fonction chef : prix + bagage, puis réduction si étudiant
// J'utilise let car total change dans le if
const prixBillet=(prix, avecBagage, etudiant)=>{
let total = prix + prixBagage(avecBagage)
if (etudiant){
    total = prixEtudiant(total);

}
return total;
}



// ===== 2. Conditions : la catégorie d'un vol =====

// Moins de 3 h = court, moins de 6 h = moyen, sinon long
function categorieVol(duree){
    if(duree<3){
     return"court-courier";
    }else if (duree<6){
      return "moyen-courier";
    }else {
      return"long-courier";
    }
}

// Utilise les deux fonctions du dessus pour faire une phrase
function resumeVol(duree, prix, avecBagage, etudiant) {
  const categorie = categorieVol(duree);
  const total = prixBillet(prix, avecBagage, etudiant);
  return categorie + " : " + total + " €";
}


// ===== 3. Les données : ma liste de vols =====

const vols = [
  { numero: "AF123", destination: "Bamako",   duree: 5,  prix: 450, complet: false },
  { numero: "AF456", destination: "Londres",  duree: 1,  prix: 120, complet: true  },
  { numero: "AF789", destination: "Tokyo",    duree: 13, prix: 980, complet: false },
  { numero: "AF321", destination: "Madrid",   duree: 2,  prix: 90,  complet: false },
  { numero: "AF654", destination: "New York", duree: 8,  prix: 620, complet: true  },
];



// ===== 4. filter et map =====

// filter : garder certains vols / map : garder une seule info de chaque vol
const volsdisoinible = vols.filter((vol) => vol.complet === false)
const volsprix = vols.filter((vol) => vol.prix < 500)
const tabdestination = vols.map((vol) => vol.destination)
// filter puis map : les destinations des vols pas complets
const tabdestinationcomplet = vols.filter((vol) => vol.complet === false).map((vol) => vol.destination)
const phrasesVols = vols.map((vol) => "votre numero de vol est " + vol.numero + "votre destination est " + vol.destination + " votre temps de vol est " + vol.duree)
// .length pour compter
const nbVolsLongs = vols.filter((vol) => vol.duree > 4).length


// ===== 5. find : trouver UN vol =====

// find rend le premier vol trouvé, ou undefined s'il n'y en a pas
const volBamako = vols.find((vol) => vol.destination === "Bamako")
const volTokyo = vols.find((vol) => vol.destination === "Tokyo")
const lowprice = vols.find((vol) => vol.prix < 100)
const volnumber = vols.find((vol) => vol.numero === "AF999")


// ===== 6. sort : trier les vols =====

// a - b = croissant, b - a = décroissant
// [...vols] fait une copie, pour ne pas modifier la liste de départ
const volsTriesParPrixCroissant = [...vols].sort((a, b) => a.prix - b.prix).map((vol) => vol.destination);
const volsTriesParDureedeCroissante = [...vols].sort((a, b) => b.duree - a.duree).map((vol) => vol.numero);
const volsTriesParprixDecroissante = [...vols].sort((a, b) => b.prix - a.prix).map((vol) => vol.destination);


// ===== 7. reduce : tout résumer en une seule valeur =====

// La tirelire commence à 0 et on ajoute le prix de chaque vol
const totalPrix = vols.reduce((total, vol) => total + vol.prix, 0);
const totalDuree = vols.reduce((total,vol) => total + vol.duree, 0);
// Pas besoin de reduce ici : j'ai déjà le total
const prixMoyen = totalPrix / vols.length;
const totalPVNcomplet = vols.filter((vol) => !vol.complet).reduce((total,vol) => total + vol.prix, 0);
// Ici la tirelire garde le vol le plus cher vu jusqu'ici
const volLePlusCher = vols.reduce(
  (plusCher, vol) => (vol.prix > plusCher.prix ? vol : plusCher),
  vols[0]
);
console.log(volLePlusCher.destination);


// ===== Affichage des résultats =====

// Si find n'a rien trouvé, volnumber vaut undefined
if (volnumber) {
  console.log("Le vol existe");
}else {
  console.log("Le vol n'existe pas");
}

console.log(volsdisoinible);
console.log(volsprix);
console.log(tabdestination);
console.log(tabdestinationcomplet);
console.log(phrasesVols);
console.log(nbVolsLongs);
console.log(volBamako);
console.log(volTokyo);
console.log(lowprice.destination);
console.log(volsTriesParPrixCroissant);
console.log(volsTriesParDureedeCroissante);
console.log(volsTriesParprixDecroissante[0]);


// ===== 8. Fonctions de recherche (filter + sort + map) =====

// Les vols disponibles dans mon budget, du moins cher au plus cher
function rechercherVols(vols, budgetMax) {
  return      vols.filter((vol) => !vol.complet && vol.prix <= budgetMax)
                  .sort((a, b) => a.prix - b.prix)
                  .map((vol) => vol.destination);

}

console.log(rechercherVols(vols, 500));
console.log(rechercherVols(vols, 1000));
console.log(rechercherVols(vols, 50));

// Les numéros des vols courts, du plus court au plus long
function volsCourts(vols, dureeMax) {
  return vols.filter((vol) => vol.duree <= dureeMax )
             .sort((a,b) => a.duree - b.duree )
             .map((vol) => vol.numero)
}


// ===== 9. Mini-défi : résumer n'importe quelle liste de vols =====

// Je recalcule tout à partir du paramètre vols,
// comme ça la fonction marche aussi sur une liste filtrée
function statsVols(vols){
  if(vols.length === 0){
    return" aucun vol trouver "
  }

  const nombre = vols.length;
  const nbDisponibles = vols.filter((vol) => !vol.complet).length;
  const totalPrix = vols.reduce((total, vol) => total + vol.prix, 0);
  const totalDuree = vols.reduce((total, vol) => total + vol.duree, 0);
  const prixMoyen = totalPrix / vols.length;
  const dureeMoyenne = totalDuree / vols.length;

  const volLePlusCher = vols.reduce(
    (plusCher, vol) => (vol.prix > plusCher.prix ? vol : plusCher),
    vols[0]
  );

  return {
    nombre: nombre,
    nbDisponibles: nbDisponibles,
    totalPrix: totalPrix,
    totalDuree: totalDuree,
    prixMoyen: prixMoyen,
    dureeMoyenne: dureeMoyenne,
    volLePlusCher: volLePlusCher.destination
  };
}



console.log(volsCourts(vols, 5));
console.log(volsCourts(vols, 1));
console.log(totalPrix);
console.log(totalDuree);
console.log(prixMoyen);
console.log(totalPVNcomplet);
console.log(volLePlusCher);
// Test sur les vols à moins de 500 € seulement
console.log(statsVols(vols.filter((vol) => vol.prix < 500)));