import { Component } from '@angular/core';
import { ArticleComponent } from '../article.component';

@Component({
  selector: 'app-graph3d',
  templateUrl: '../article.component.html',
  styleUrls: ['../article.component.scss']
})
export class Graph3dComponent extends ArticleComponent {

  constructor() {
    super(
      "Graphisme 3D",
      "Ce projet etait dans le cadre du cours d'initiation au fonctionnement du rendu 3D durant mon cursus à l'ensimag.", 
      [
        {
          title: 'Cycle Jour Nuit',
          img: './assets/puniv/3d/',
          text: `Pour cela nous avons simplement ajouter 2 sphères, une representant le soleil et une seconde representant la lune.
                 Une fois cela effectué, il a fallu placer la lumière pour que notre scene soit illumer en fonction de la position du soleil ainsi que de la lune.`
        }, 
        {
          title: 'Génération procédural du monde',
          img: './assets/puniv/3d/groundGeneration.png',
          text: 'Lorem'
        },
        {
          title: 'Ciel bleu',
          img: './assets/Logo.png',
          text: 'Lorem'
        },
        {
          title: 'Animation',
          img: './assets/Logo.png',
          text: 'Lorem'
        },
        {
          title: 'Texture',
          img: './assets/puniv/3d/wallTexture.png',
          text: 'Lorem'
        }
      ]
    );
  }
}
