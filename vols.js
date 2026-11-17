//Exercice : prix d’un billet d’avion ✈️

//Écris 3 fonctions :

//prixBagage(avecBagage = false)
//Rend 35 si avecBagage est vrai, sinon 0.
//reductionEtudiant(prix)
//Rend le prix moins 15 %.
//prixBillet(prix, avecBagage, etudiant), la fonction chef :
//ajoute le prix du bagage au prix,
//si etudiant est vrai, applique la réduction sur le total,
//rend le résultat.
//Tests à lancer/


function prixBagage(avecBagage = false){
    if(avecBagage){
    return 35; 
     } else {
        return 0
    }
}
const prixEtudiant = (prix) => 
    prix -(prix*15)/100

const prixBillet=(prix, avecBagage, etudiant)=>{
let total = prix + prixBagage(avecBagage)
if (etudiant){
    total = prixEtudiant(total);
    
}
return total;
}



function categorieVol(duree){
    if(duree<3){
     return"court-courier";
    }else if (duree<6){
      return "moyen-courier";
    }else {
      return"long-courier";   
    }
}

function resumeVol(duree, prix, avecBagage, etudiant) {
  const categorie = categorieVol(duree);
  const total = prixBillet(prix, avecBagage, etudiant);
  return categorie + " : " + total + " €";
}

const vols = [
  { numero: "AF123", destination: "Bamako",   duree: 5,  prix: 450, complet: false },
  { numero: "AF456", destination: "Londres",  duree: 1,  prix: 120, complet: true  },
  { numero: "AF789", destination: "Tokyo",    duree: 13, prix: 980, complet: false },
  { numero: "AF321", destination: "Madrid",   duree: 2,  prix: 90,  complet: false },
  { numero: "AF654", destination: "New York", duree: 8,  prix: 620, complet: true  },
];


const volsdisoinible = vols.filter((vol) => vol.complet === false)
const volsprix = vols.filter((vol) => vol.prix < 500)
const tabdestination = vols.map((vol) => vol.destination) 
const tabdestinationcomplet = vols.filter((vol) => vol.complet === false).map((vol) => vol.destination)
const phrasesVols = vols.map((vol) => "votre numero de vol est " + vol.numero + "votre destination est " + vol.destination + " votre temps de vol est " + vol.duree)
const nbVolsLongs = vols.filter((vol) => vol.duree > 4).length
const volBamako = vols.find((vol) => vol.destination === "Bamako")
const volTokyo = vols.find((vol) => vol.destination === "Tokyo")
const lowprice = vols.find((vol) => vol.prix < 100)
const volnumber = vols.find((vol) => vol.numero === "AF999")

const volsTriesParPrixCroissant = [...vols].sort((a, b) => a.prix - b.prix).map((vol) => vol.destination);
const volsTriesParDureedeCroissante = [...vols].sort((a, b) => b.duree - a.duree).map((vol) => vol.numero);
const volsTriesParprixDecroissante = [...vols].sort((a, b) => b.prix - a.prix).map((vol) => vol.destination);



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
