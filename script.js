// Récupération du body
const body = document.querySelector("body");

// Déclaration de la fonction rain qui va faire pleuvoir
const rain = () => {
  // création des variables amount et i
  let amount = 50;
  let i = 0;

  // boucle while
  while (i < amount) {
    // Création d'un élément div et ajout de celui-ci dans le DOM
    const drop = document.createElement("div");
    body.appendChild(drop);
    // Incrémentation de la variable  i
    i++;

    // Création des variables width, positionX, delay et duration
    let width = Math.random() * 5;
    let positionX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -20;
    let duration = Math.random() * 5;

    // Stylisation
    drop.style.width = 0.2 + width + "px";
    drop.style.left = positionX + "px";
    drop.style.animationDelay = delay + "s";
    drop.style.animationDuration = 1 + duration + "s";
  }
};
// Appel de la fonction rain
rain();
