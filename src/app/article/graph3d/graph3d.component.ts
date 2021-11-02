import { Component } from '@angular/core';
import { AlternateElement } from '../../alternate/alternate.component';

@Component({
  selector: 'app-graph3d',
  templateUrl: './graph3d.component.html',
  styleUrls: ['../article.component.scss'],
  host: { class: "content" }
})
export class Graph3dComponent {
  elements: Array<AlternateElement> = [
    {
        title: 'Cycle Jour Nuit',
        img: './assets/puniv/3d/DayCycle.gif',
        texts: [
          "Pour cela nous avons simplement ajouter 2 sphères, une representant le soleil et une seconde representant la lune.",
          "Une fois cela effectué, il a fallu placer la lumière pour que notre scene soit illumer en fonction de la position du soleil ainsi que de la lune."
        ]
    }, 
    {
        title: "Génération procédural du monde",
        img: "./assets/puniv/3d/groundGeneration.png",
        texts: [
          "La génération procédural du monde se base sur un système de chunk. Chaque chunk à une taille donnée et est stocké dans tableau 2D en normalisant ces coordonées.",
          "Lors du chargement du jeu, on instancie donc le chunk ou se situe la caméra (0, 0) puis on instancie tous les chunk autour de ce dernier.",
          "Lors du déplacement de la caméra, si ce dernier change de chunk, on charge les chunk adjacent à la caméra non chargé et decharge ceux qui sont maintenant éloigné de cette dernière."
        ]
    },
    {
        title: "Ciel bleu",
        img: "./assets/puniv/3d/Sky.gif",
        texts: [
          "Le ciel est gérer par une grande skybox. Il s'agit donc d'un cube ou l'on y applique une image d'un ciel sur chaque parti de ce dernier. Ce cube va suivre la position de la caméra pour ne jamais poouvoir sortir de cette boite.",
          "De plus pour donner vie à ce ciel, nous avons ajouté des étoiles qui sont de simples sphère avec un shaders lumineux pour donner l'illusion d'étoile. Ces étoiles suivent des mouvements aléatoires prédéfini."
        ]
    },
    {
        title: 'Animation',
        img: './assets/puniv/3d/Animation.gif',
        texts: [
          "Du côté des animations, nous avons ajouté les animations suivantes : ",
          `
            <ul>
              <li>Pour le deplacements des personnages.</li>
              <li>Pour les attaques du héros.</li>
              <li>Pour le drapeau français.</li>
              <li>Pour les portes du chataux.</li>
            </ul>
          `
        ]
    },
    {
      title: 'Texture',
      img: './assets/puniv/3d/wallTexture.png',
      texts: [
        "En ce qui concerne la mise en place des textures, nous avons effectué cela itérativement.",
        "Nous avons commencé par appliquer une simple image représentant la texture sur notre objet.",
        "Ensuite, à l'aide d'un shader, nous avons gérer l'éclairage de notre texture.",
        "Puis pour embellir cette dernière, nous avons utiliser une normal map. Cela permet de gérer l'apllication de l'image de texture sur notre objet en simulant un notion de profondeur.",
        "Vous pouvez voir le rendu de ces différentes texture."
      ]
    }
  ]
}
