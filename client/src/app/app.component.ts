import { Component } from "@angular/core";
import { TimelineEvent } from "./timeline/timeline.component";

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
        image: "/school/Ensimag.png"
      },
      {
        date: "2017 - 2019",
        status: "IUT en Informatique de Nice",
        iconText: "Bac +2",
        color: "#3a68b7",
        image: "/school/UCA.png"
      },
      {
        date: "2014 - 2017",
        status: "Bac Scientifique ISN",
        iconText: "Bac",
        color: "#e72626",
        image: "/school/Estienne.svg"
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
        color: "#e72626",
        image: "/society/id3.png",
        text: "<b>Technologies</b> : C++, GStreamer, DeepStream.<br/> TODO Continue ......."
      },
      {
        date: "Avril 2019 - Juillet 2019",
        status: "LEAT",
        iconText: "Technicien",
        color: "#e72626",
        image: "/society/leat.jpg",
        text: "<b>Technologies</b> : Python, Keras, Movidius.<br/> TODO Continue ......."
      },
      {
        date: "Juillet 2018 - Aout 2018",
        status: "HeartBoxGames",
        iconText: "Technicien",
        color: "#e72626",
        image: "/society/hbg.jpg",
        text: "<b>Technologies</b> : C#, Unity3D.<br/> TODO Continue ......."
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
        image: "Ensimag.png",
        text: "<b>Technologies</b> : Vuejs, D3js, Leaflet.<br/> Durant ce projet, nous avons pu réaliser une interface permettant de visualiser plus de 30 000 arbres présent sur Grenoble."
      },
      {
        date: "Janvier 2021",
        status: "Projet de conception d'un langange informatique, le Déca",
        iconText: "5",
        color: "#3a68b7",
        image: "Estienne.svg",
        text: ""
      }
    ]
  };

  perso = {
    title: "Lien",
    terminal: "Mes différents projets personnels que vous pouvez retrouvez sur GitHub.",
    timeline: [
      {
        date: "Octobre 2021",
        status: "Projet de description de mes compétences",
        iconText: "X",
        color: "#3a68b7",
        image: "Ensimag.png",
        text: "<b>Technologies</b> : Angular"
      },
      {
        date: "Avril - Septembre 2021",
        status: "Projet d'art génératif",
        iconText: "X",
        color: "#3a68b7",
        image: "Estienne.svg",
        text: "<b>Technologies</b> : Vuejs, P5js"
      }
    ]
  };
}
