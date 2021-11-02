import { Component } from '@angular/core';
import { AnimationEvent } from "@angular/animations";
import { TimelineEvent } from "../timeline/timeline.component";
import { PrimeIcons } from "primeng/api";
import { fadeAnimation } from "../animation/animation";

interface AppData {
  id: number,
  title: string,
  terminal: string,
  timeline: Array<TimelineEvent>
}

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
  animations: [fadeAnimation],
  host: { class: "content"}
})

export class StoryComponent {

  // Initialize selected value
  selected: AppData = {
    id: 0,
    title: "",
    terminal: "Choisissez une catégorie pour en apprendre d'avantages sur moi.",
    timeline: []
  };

  private HIDDEN: string = "hidden";
  private VISIBLE: string = "visible";
  displayState: string = this.HIDDEN;
  private to: AppData = this.selected;

  changeTo(to: AppData): void {
    if (this.selected === to) 
      return;
    
    this.to = to;
    this.displayState = this.HIDDEN;
  }

  applyChange(event: AnimationEvent): void {    
    if (! ["void", this.HIDDEN, this.VISIBLE].includes(event.fromState)) 
      return;
    
    if (["void", this.VISIBLE].includes(event.fromState) && event.toState === this.HIDDEN) {
      this.selected = this.to;
      this.displayState = this.VISIBLE;
    }
  }

  isSelected(id: number): string {
    return this.selected.id === id ? "card-selected" : "";
  }

  studies = {
    id: 1,
    title: "Ecole",
    terminal: "Le déroule de mes études.",
    timeline: [
      {
        date: "2019 - 2022",
        status: "Ecole d'ingénieur en mathématique et informatique",
        iconText: "Bac +5",
        color: "#8aff72",
        image: "/school/Ensimag.png",
        summary: "Ecole d'ingénieur grenobloise reconnu pour sa qualité de formation.",
        link: "https://ensimag.grenoble-inp.fr/"
      },
      {
        date: "2017 - 2019",
        status: "IUT en Informatique de Nice",
        iconText: "Bac +2",
        color: "#5a99ff",
        image: "/school/UCA.png",
        summary: "IUT informatique de Nice. J'y ai découvert l'informatique. J'ai pu apprendre et m'initier au divers domaines de l'informatique.",
        link: "https://iut.univ-cotedazur.fr/departements-et-formations/informatique/le-departement"
      },
      {
        date: "2014 - 2017",
        status: "Bac Scientifique ISN",
        iconText: "Bac",
        color: "#ff6969",
        image: "/school/Estienne.svg",
        summary: "Le lycée Honoré Estienne d'Orves. Il s'agit de l'un des nombreux lycée de Nice. J'y ai passé mon Bac Scientifique spécialité ISN.",
        link: "https://www.lyc-honore-d-estienne-d-orves.ac-nice.fr/"
      }
    ]
  };

  pro = {
    id: 2,
    title: "Expérience",
    terminal: "Mes différentes expériences en entreprise.",
    timeline: [
      {
        date: "Mai 2021 - Septembre 2021",
        status: "id3 Technologies",
        iconText: "Assistant Ingénieur",
        color: "#faff6d",
        image: "/society/id3.png",
        technologies: ["C++", "GStreamer", "DeepStream"],
        summary: "Durant ce stage, j'ai pu utiliser des ordinateurs Jetson de chez NVidia ainsi que divers camera (USB, CSI, IP). Avec ce materiel j'ai pu réaliser de l'inférence en temps réel en analysant le SDK DeepStream qui permet de faciliter l'exploitation du GPU de cet ordinateur embarqué.",
        link: "https://id3.eu/fr/"
      },
      {
        date: "Avril 2019 - Juillet 2019",
        status: "LEAT",
        iconText: "Technicien",
        color: "#8aff72",
        image: "/society/leat.jpg",
        technologies: ["Python", "Keras", "Movidius"],
        summary: "Durant ce stage, j'ai pu m'initier à l'intelligence artificielle ainsi qu'au monde de l'embarqué. J'ai notamment implementer une ia entrainé à l'aide de Keras sur le jeu de données de cifar 10 et l'ai déployé sunr une raspberry pi equipé d'un accélérateur de réseau de neuronnes movidius.",
        link: "https://leat.univ-cotedazur.fr/"
      },
      {
        date: "Juillet 2018 - Aout 2018",
        status: "HeartBoxGames",
        iconText: "Technicien",
        color: "#55f1ff",
        image: "/society/hbg.jpg",
        technologies: ["C#", "Unity3D"],
        summary: "Durant ce stage, j'ai pu developper des jeux videos mobiles deployer sur iOS à l'aide du moteur de jeu vidéo Unity. Vous pouvez retrouver les 2 jeux que j'ai developpé sur l'AppStore, <b>BumpHit</b> & <b>FlipHit</b>",
        link: "https://heartboxgames.com/"
      }
    ]
  };

  university = {
    id: 3,
    title: "Projet en équipes",
    terminal: "Mes différents projets universitaires.",
    timeline: [
      {
        date: "Septembre 2021",
        status: "Visualisation de données à grande echelle",
        iconText: "5",
        color: "#ff6969",
        image: "/puniv/GreeNoble.gif",
        technologies: ["Vuejs", "D3js", "Leaflet"],
        summary: "Durant ce projet, nous avons pu réaliser une interface permettant de visualiser plus de 30 000 arbres présent sur Grenoble.",
        preview: true
      },
      {
        date: "Janvier 2021",
        status: "Conception d'un langange informatique orienté objet, le Déca",
        iconText: "5",
        color: "#3a68b7",
        technologies: ["Java", "Antlr", "Assembleur"],
        summary: "Création d'un compilateur de programme en language Deca. Ce langage est un sous ensemble du langage Java, il possède donc seulement les fonctions principales de Java.",
        preview: true
      },
      {
        date: "Mars 2021 - Mai 2021",
        status: "Jeux vidéo en OpenGL",
        iconText: "3",
        color: "#8aff72",
        image: "/puniv/3d/Projet-3D.gif",
        technologies: ["Python", "OpenGL", "GLFW"],
        summary: "Réalisation d'un monde 3D à l'aide d'OpenGL en Python. Ce dernier regroupe différent concept de la modélisation, rendu et animation d'objet dans un monde 3D.",
        link: "./graph3d",
        preview: true
      },
      {
        date: "Juin 2020",
        status: "Librairie d'interface graphique en C",
        iconText: "3",
        color: "#ff7cff",
        image: "/puniv/Projet-c.gif",
        technologies: ["C", "SDL allége"],
        summary: "Création d'un librairie permettant de créer des interfaces graphique en C. <br/>Ce projet était basé sur la librairie SDL modifié par les enseignant pour fournir moins de fonctionnalité que celle de base. Cette librairie ne permettait que de desiner des polygones et du texte.",
        preview: true
      },
      {
        date: "Janvier 2019 - Mars 2019",
        status: "Robot connecté",
        iconText: "7",
        color: "#ffb75f",
        image: "/puniv/BrunoLeRobot.png",
        technologies: ["Python", "OpenCV", "Java", "Web", "C#", "Kinect"],
        summary: 
          `Projet de robot autonome pouvant : 
          <ul>
            <li>Suivre une personne à l'aide d'OpenCV qui fonctionné sur une Raspberry Pi 3.</li>
            <li>Être piloté à distance à l'aide de la caméra Kinect et de geste défini.</li>
          </ul>
          Ce robot était construit à l'aide d'un kinect de légo Mindstorm ainsi que de sont controleur. La raspberry était monté sur ce dernier et avait une caméra pour le retour visuel et permettait l"echange d'information entre le robot et la kinect.
          `,
        preview: true
      },
      {
        date: "Septembre 2018 - Décembre 2018",
        status: "Numérisation d'un jeu de carte",
        iconText: "7",
        color: "#ff6969",
        image: "/puniv/MOW.gif",
        technologies: ["Java", "JavaFX", "Web", "React"],
        summary: "Modélisation d'un jeu de Carte, <a href='https://www.jeuxdenim.be/jeu-Mow'>MOW</a>. Notre modélisation permet à des joueurs sur leurs smartphones de ce connecter à la table de jeu depuis leur navigateur.",
        preview: true
      },
      {
        date: "Novembre 2018 - Décembre 2018",
        status: "Simulateur de trafic routier",
        iconText: "3",
        color: "#55f1ff",
        image: "/puniv/TraficRoutier.gif",
        technologies: ["Java", "JavaFX"],
        summary: "Modélisation simplifié d'un système de traffic routier avec feux de circulation, priorité à droite et génération d'une route aléatoire.",
        preview: true
      }
    ]
  };

  perso = {
    id: 4,
    title: $localize`:Title of perso category|@@persoTitle:`,
    terminal: "Mes différents projets personnels que vous pouvez retrouvez sur GitHub.",
    timeline: [
      {
        date: "Octobre 2021",
        status: "Site me présentant",
        icon: PrimeIcons.USER,
        color: "#836dff",
        image: "/pperso/ThisSite.png",
        technologies: ["Angular", "PrimeNG"],
        summary: "Ce site présentant l'ensemble des mes expéricences dans l'informatique.",
        preview: true
      },
      {
        date: "Avril - Septembre 2021",
        status: "Art génératif",
        icon: PrimeIcons.EYE,
        color: "#5a99ff",
        image: "/pperso/WebArts.png",
        technologies: ["Vuejs", "P5js"],
        summary: "Ce projet est un recueil d'effet visuel fort sympathique à l'oeil. Ce projet regroupe une cinquantaine d'effets de différents types. Tous ces effets ce base sur un canvas de p5JS ou l'on dessine dans ce dernier. Ces canvas sont orchestré par VueJS pour faciliter le deploiment et la mise en place d'un nouvelle effet",
        link: "https://evayann.github.io/WebArts/#/",
        preview: true
      },
      {
        date: "Juin 2020 - Juillet 2020",
        status: "Librairie de géneration de SVG animé, SVGVideoMaker & Effets visuel",
        icon: PrimeIcons.SHIELD,
        color: "#8aff72",
        image: "/pperso/SVGVideoMaker.gif",
        technologies: ["Python"],
        summary: "Librairie permettant de generer un gif ou un mp4 à partir de SVG qui est animé.",
        link: "https://github.com/evayann/SVGVideoMaker",
        preview: true
      },
      {
        date: "Février 2020",
        status: "Optimisation de cache sur un automate cellulaire",
        icon: PrimeIcons.FILE,
        color: "#ff6969",
        image: "/pperso/TriangleSierpinski.gif",
        summary: "Mise en place de plusieurs politique d'optimisation de cache pour un automate cellulaire. Ce dernier dessine le triangle de Triangle Sierpinski dans un canvas de p5js.",
        link: "https://github.com/evayann/TriangleSierpinski",
        preview: true
      },
      {
        date: "Mars 2019",
        status: "Recreation du jeu 2048",
        icon: PrimeIcons.TABLE,
        color: "#836dff",
        image: "/pperso/2048.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        summary: "Recréation du jeu mitique 2048. Pour jouer une partie, c'est par ici !",
        link: "./2048",
        preview: true
      },
      {
        date: "Novembre 2018",
        status: "Site expliquant la programmation orientée objet",
        icon: PrimeIcons.COMPASS,
        color: "#ff6969",
        image: "/pperso/Site_OO.png",
        technologies: ["Joomla"],
        summary: "Création d'un site permettant le partage de connaissance de la programmation et conception orienté objet avec des cours, des exemples et des quizzs classé par niveau.",
        preview: true
      },
      {
        date: "Avril 2018",
        status: "Copie de Pokémon émeraude",
        icon: PrimeIcons.COG,
        color: "#8aff72",
        image: "/pperso/Pokévayann.gif",
        technologies: ["Java", "Slick2D"],
        summary: "Recréation du Bourg-Palette de pokémon éméraude avec l'implémentation d'un système de combat simple, de l'interaction avec les pnj ainsi que les habitations.",
        preview: true
      }
    ]
  };
}
