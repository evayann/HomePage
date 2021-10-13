import { Component } from "@angular/core";
import { TimelineEvent } from "./timeline/timeline.component";
import {PrimeIcons} from "primeng/api";

interface AppData {
  title: string,
  terminal: string,
  timeline: Array<TimelineEvent>
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent {
  // Initialize selected value
  selected: AppData = {
    title: "",
    terminal: "Choisissez une catégorie pour en apprendre d'avantages sur moi.",
    timeline: []
  };

  studies = {
    title: "Ecole",
    terminal: "Le déroule de mes études.",
    timeline: [
      {
        date: "2019 - 2022",
        status: "Ecole d'ingénieur en mathématique et informatique",
        iconText: "Bac +5",
        color: "#37ce26",
        image: "/school/Ensimag.png",
        text: "Ecole d'ingénieur grenobloise reconnu pour sa qualité de formation.",
        link: "https://ensimag.grenoble-inp.fr/"
      },
      {
        date: "2017 - 2019",
        status: "IUT en Informatique de Nice",
        iconText: "Bac +2",
        color: "#3a68b7",
        image: "/school/UCA.png",
        text: "IUT informatique de Nice. J'y ai découvert l'informatique. J'ai pu apprendre et m'initier au divers domaines de l'informatique.",
        link: "https://iut.univ-cotedazur.fr/departements-et-formations/informatique/le-departement"
      },
      {
        date: "2014 - 2017",
        status: "Bac Scientifique ISN",
        iconText: "Bac",
        color: "#e72626",
        image: "/school/Estienne.svg",
        text: "Le lycée Honoré Estienne d'Orves. Il s'agit de l'un des nombreux lycée de Nice. J'y ai passé mon Bac Scientifique spécialité ISN.",
        link: "https://www.lyc-honore-d-estienne-d-orves.ac-nice.fr/"
      }
    ]
  };

  pro = {
    title: "Expérience",
    terminal: "Mes différentes expériences en entreprise.",
    timeline: [
      {
        date: "Mai 2021 - Septembre 2021",
        status: "id3 Technologies",
        iconText: "Assistant Ingénieur",
        color: "#fdd28e",
        image: "/society/id3.png",
        text: "<b>Technologies</b> : C++, GStreamer, DeepStream.<br/> Durant ce stage, j'ai pu utiliser des ordinateurs Jetson de chez NVidia ainsi que divers camera (USB, CSI, IP). Avec ce materiel j'ai pu réaliser de l'inférence en temps réel en analysant le SDK DeepStream qui permet de faciliter l'exploitation du GPU de cet ordinateur embarqué.",
        link: "https://id3.eu/fr/"
      },
      {
        date: "Avril 2019 - Juillet 2019",
        status: "LEAT",
        iconText: "Technicien",
        color: "#9de726",
        image: "/society/leat.jpg",
        text: "<b>Technologies</b> : Python, Keras, Movidius.<br/> Durant ce stage, j'ai pu m'initier à l'intelligence artificielle ainsi qu'au monde de l'embarqué. J'ai notamment implementer une ia entrainé à l'aide de Keras sur le jeu de données de cifar 10 et l'ai déployé sunr une raspberry pi equipé d'un accélérateur de réseau de neuronnes movidius.",
        link: "https://leat.univ-cotedazur.fr/"
      },
      {
        date: "Juillet 2018 - Aout 2018",
        status: "HeartBoxGames",
        iconText: "Technicien",
        color: "#28b6f6",
        image: "/society/hbg.jpg",
        text: "<b>Technologies</b> : C#, Unity3D.<br/> Durant ce stage, j'ai pu developper des jeux videos mobiles deployer sur iOS à l'aide du moteur de jeu vidéo Unity. Vous pouvez retrouver les 2 jeux que j'ai developpé sur l'AppStore, <b>BumpHit</b> & <b>FlipHit</b>",
        link: "https://heartboxgames.com/"
      }
    ]
  };

  university = {
    title: "Projet en équipes",
    terminal: "Mes différents projets universitaires.",
    timeline: [
      {
        date: "Septembre 2021",
        status: "Visualisation de données à grande echelle",
        iconText: "5",
        color: "#e72626",
        image: "/puniv/GreeNoble.gif",
        text: "<b>Technologies</b> : Vuejs, D3js, Leaflet.<br/> Durant ce projet, nous avons pu réaliser une interface permettant de visualiser plus de 30 000 arbres présent sur Grenoble."
      },
      {
        date: "Janvier 2021",
        status: "Conception d'un langange informatique, le Déca",
        iconText: "5",
        color: "#3a68b7",
        image: "",
        text: "<b>Technologies</b> : Java, Antlr, Assembleur"
      },
      {
        date: "Mars 2021 - Mai 2021",
        status: "Jeux vidéo en OpenGL",
        iconText: "3",
        color: "#000",
        image: "/puniv/Projet-3D.gif",
        text: "<b>Technologies</b> : Python, OpenGL, GLFW"
      },
      {
        date: "Juin 2020",
        status: "Librairie d'interface graphique en C",
        iconText: "3",
        color: "#d7ff96",
        image: "/puniv/Projet-c.gif",
        text: "<b>Technologies</b> : C, Librarie graphique similaire a SDL"
      },
      {
        date: "Janvier 2019 - Mars 2019",
        status: "Robot connecté",
        iconText: "7",
        color: "#159",
        image: "/puniv/Robot.gif",
        text: "<b>Technologies</b> : Python, OpenCV, Java, Web, C#, Kinect"
      },
      {
        date: "Novembre 2018 - Décembre 2018",
        status: "Simulateur de trafic routier",
        iconText: "3",
        color: "#941",
        image: "/puniv/Trafic.gif",
        text: "<b>Technologies</b> : Java, JavaFX"
      }
    ]
  };

  perso = {
    title: $localize`:Title of perso category|@@persoTitle:`,
    terminal: "Mes différents projets personnels que vous pouvez retrouvez sur GitHub.",
    timeline: [
      {
        date: "Octobre 2021",
        status: "Projet de description de mes compétences",
        icon: PrimeIcons.USER,
        color: "#3a68b7",
        image: "Ensimag.png",
        text: "<b>Technologies</b> : Angular"
      },
      {
        date: "Avril - Septembre 2021",
        status: "Projet d'art génératif",
        icon: PrimeIcons.EYE,
        color: "#3a68b7",
        image: "/pperso/WebArts.png",
        text: "<b>Technologies</b> : Vuejs, P5js. <br/> Ce projet est un recueil d'effet visuel fort sympathique à l'oeil. Ce projet regroupe une cinquantaine d'effets de différents types. Tous ces effets ce base sur un canvas de p5JS onl'on dessine dans ce dernier. Ces canvas sont orchestré par VueJS pour faciliter le deploiment et la mise en place d'un nouvelle effet"
      },
      {
        date: "XXX",
        status: "Generateur de SVG, SVGVideoMaker & Effets visuel",
        icon: PrimeIcons.SHIELD,
        color: "#000",
        image: "/pperso/SVGVideoMaker.gif"
      }
    ]
  };
}
