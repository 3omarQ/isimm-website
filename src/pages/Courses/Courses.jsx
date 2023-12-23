import React from "react";
import "./Courses.css";
import ing_info from "../../utils/images/ing_informatique.jpg";

import eea from "../../utils/images/EEA.jpg";
import eea_mim from "../../utils/images/EEA-MIM.jpg";
import math from "../../utils/images/math.jpg";
import iot from "../../utils/images/licence_iot.jpg";
import prepa from "../../utils/images/prepa.jpg";
import master_data from "../../utils/images/master_data_science.jpg";
import master_gl from "../../utils/images/master_genie_logiciel.jpg";
import master_me from "../../utils/images/master_microelectronique.jpg";

import ing_icon from "../../utils/images/engineering.png";
import master_icon from "../../utils/images/master.png";
import licence_icon from "../../utils/images/licence.png";
import { Card, Button } from "react-bootstrap";

const courses = {
  ingenieurs: [
    {
      id: 1,
      img: prepa,
      title: "Cycle préparatoire integré",
      link: "http://www.isimm.rnu.tn//storage/app/public/Plans%20des%20%C3%A9tudes/ING_Info.pdf",
      description:
        "Ce parcours vise à fournir une préparation approfondie, ouvrant la voie à l'intégration du cycle d'ingénieur. Il offre ainsi aux étudiants une base solide et les compétences nécessaires pour aborder avec succès les études d'ingénierie subséquentes.",
    },
    {
      id: 2,
      img: ing_info,
      title: "Ingénieurs informatique: Logiciels intelligents et distribuées",
      link: "http://www.isimm.rnu.tn//storage/app/public/Plans%20des%20%C3%A9tudes/ING_Info.pdf",
      description:
        "Ce cycle dure trois ans et l'admission à ce cycle se fait par voie de concours ouvert aux étudiants inscrits en cycle préparatoire intégré de l'ISIMM. Les étudiants n'ayant pas été admis au cycle d'ingénieurs peuvent s'inscrire en troisième année de licence.",
    },
    {
      id: 3,
      img: eea,
      title: "Ingénieurs Electronique et Microélectronique",
      link: "http://www.isimm.rnu.tn//storage/app/public/Plans%20des%20%C3%A9tudes/PlanDesEtudes-ING-ElecuElec-2021-2022.pdf",
      description:
        "À partir de 2009-2010, l'ISIMM propose une nouvelle formation en électronique pour décerner le diplôme d'ingénieur en sciences appliquées et technologie (électronique-microélectronique). Après un concours national, les étudiants suivent un cycle d'études de trois ans pour obtenir ce diplôme prestigieux.",
    },
  ],
  licences: [
    {
      id: 1,
      img: eea,
      title: "EEA - Parcours : Systèmes Embarqués (SE)",
      link: "http://www.isimm.rnu.tn//storage/app/public/Plans%20des%20%C3%A9tudes/PlanEtudes-Licence-EEA-SE.pdf",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      id: 2,
      img: eea_mim,
      title: "EEA - Parcours: Mesure Instrumentation et Métrologie (MIM)",
      link: "http://www.isimm.rnu.tn//storage/app/public/Plans%20des%20%C3%A9tudes/PlanEtudes-Licence-EEA-MIM.pdf",
      description:
        "Ce parcours forme des professionnels de l’instrumentation dans des domaines liés à la métrologie et les mesures : environnementales, biologiques, industrielles, médicales… L’objectif de cette formation est de former des professionnels capables de contrôler les instruments industriels (étalonnages, normes...) pour garantir une production industrielle de qualité.",
    },
    {
      id: 3,
      img: math,
      title: "Mathématiques Appliquées",
      link: "http://www.isimm.rnu.tn//storage/app/public/Plans%20des%20%C3%A9tudes/Math+%C2%AEmatique.pdf",
      description:
        "La licence de mathématiques va bien au-delà de l'enseignement et de la recherche. Ses débouchés sont surprenants et s'étendent à des domaines tels que la météo, la finance, la médecine, la biologie, les transports, l'assurance et bien d'autres encore. C'est une passerelle vers des opportunités professionnelles diverses et inattendues !",
    },
    {
      id: 4,
      img: ing_info,
      title: "Science de l'informatique",
      link: "http://www.isimm.rnu.tn//storage/app/public/Plans%20des%20%C3%A9tudes/Math+%C2%AEmatique.pdf",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      id: 5,
      img: iot,
      title: "TIC - Parcours: Réseaux et IOT (RIOT)",
      link: "http://www.isimm.rnu.tn//storage/app/public/Plans%20des%20%C3%A9tudes/PlanDesEtudes-Licence-TIC-RIOT.pdf",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
  ],
  masters: [
    {
      id: 1,
      img: master_gl,
      title: "Master de recherche en génie logiciel",
      link: "404",
      description:
        "Le domaine du génie logiciel, lors d'un master, ouvre des portes vers une multitude de métiers informatiques recherchés dans les services numériques, les banques, les entreprises industrielles, les administrations et les start-up innovantes, notamment dans les applications mobiles, les objets connectés, le e-commerce et l'intelligence artificielle.",
    },
    {
      id: 2,
      img: master_me,
      title: "Master de recherche en Microélectronique et Instrumentation",
      link: "http://www.isimm.rnu.tn/storage/app/public/Plans%20des%20%C3%A9tudes/plan%20des%20%C3%A9tudes%20MR_micro%C3%A9lectronique%20(approuv%C3%A9%20CU)2022-2026.pdf",
      description:
        "L’objectif général de la formation en mastère de recherche en microélectronique et instrumentation vise à former des compétences qui disposent de toute l’expertise et le savoir-faire en matière de la microélectronique ainsi que l’instrumentation associée (microsystèmes, systèmes embarqués, micro-capteurs,...). En plus, ce master assure une meilleure formation pour les futurs doctorants.",
    },
    {
      id: 3,
      img: master_data,
      title: "Master professionnel : Data Science",
      link: "http://www.isimm.rnu.tn/storage/app/public/Plans%20des%20%C3%A9tudes/plan%20des%20%C3%A9tudes%20MR_micro%C3%A9lectronique%20(approuv%C3%A9%20CU)2022-2026.pdf",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      id: 4,
      img: eea_mim,
      title:
        "Master professionnel : Ingénierie en Instrumentation Industrielle",
      link: "http://www.isimm.rnu.tn//storage/app/public/Plans%20des%20%C3%A9tudes/plan%20des%20etudes%203I.pdf",
      description:
        "Il s’agit de former des étudiants ayant des compétences de haut niveau à la fois en mesures et en instrumentation pour les systèmes industriels. L’instrumentation couvre ici tous les domaines allant du capteur (choix, conditionnement) à la commande des systèmes (actionneurs, moteurs).",
    },
    {
      id: 5,
      img: master_gl,
      title: "Master professionnel en génie logiciel",
      link: "404",
      description:
        "Le domaine du génie logiciel, lors d'un master, ouvre des portes vers une multitude de métiers informatiques recherchés dans les services numériques, les banques, les entreprises industrielles, les administrations et les start-up innovantes, notamment dans les applications mobiles, les objets connectés, le e-commerce et l'intelligence artificielle.",
    },
  ],
};

function Courses() {
  return (
    <div className="courses-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold mt-5">Nos formations</h1>
          <p className="text-center mt-4 mb-1 mx-5">
            " La qualité de nos formations est régie par le souci majeur de
            faire en sorte qu'elles puissent être en parfaite harmonie avec les
            attentes du marché de l’emploi. Pour concrétiser nos objectifs dans
            ce sens non seulement nous nous appuyons sur l'expérience de nos
            enseignants en matière de formation mais sur un apport extérieur en
            faisant appel aussi bien aux compétences nationales exerçant dans le
            monde industriel qu’aux compétences internationales de divers pays
            amis. "
          </p>
        </div>
      </header>
      <div className="container pb-4">
        <div className=" mt-5 mb-4 d-flex align-items-center">
          <img className="icons" src={ing_icon} />
          <div>
            <h1 className=" fw-semibold">Cycles d'ingénieur</h1>
            <h3 className=" lh-2 fw-light" style={{ fontSize: 15 }}>
              Le cycle d'ingénieur, s'étendant sur trois ans, suit souvent un
              cursus préparatoire intégré de deux ans ou une licence. Il offre
              une formation pointue en ingénierie.
            </h3>
          </div>
        </div>

        <div className="row g-4">
          {courses.ingenieurs.map((course) => (
            <div key={course.id} className="col-lg-4">
              <Card className="text-white shadow scale-hover-effect">
                <div className="img-container">
                  <Card.Img
                    src={course.img}
                    className="img"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  />
                </div>
                <Card.ImgOverlay className="d-flex flex-column justify-content-center p-md-5">
                  <Card.Title className="fs-4 text-center my-1">
                    {course.title}
                  </Card.Title>
                  <Card.Text className="text-center">
                    {course.description}
                  </Card.Text>
                  <div className="d-flex justify-content-end">
                    <Card.Link
                      href={course.link}
                      className="link"
                      target="_blank"
                    >
                      Consultez le plan d'études..
                    </Card.Link>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="container pb-4">
        <div className=" mt-5 mb-4 d-flex align-items-center">
          <img className="icons" src={master_icon} />
          <div>
            <h1 className=" fw-semibold">Masters</h1>
            <h3 className=" lh-2 fw-light" style={{ fontSize: 15 }}>
              Dans le système LMD, après une licence de trois ans, le master de
              deux ans offre une spécialisation approfondie préparant mieux pour
              le monde professionnel.
            </h3>
          </div>
        </div>

        <div className="row g-4">
          {courses.masters.map((course) => (
            <div key={course.id} className="col-lg-4">
              <Card className="text-white shadow scale-hover-effect">
                <div className="img-container">
                  <Card.Img
                    src={course.img}
                    className="img"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  />
                </div>
                <Card.ImgOverlay className="d-flex flex-column justify-content-center p-md-5">
                  <Card.Title className="fs-4 text-center my-1">
                    {course.title}
                  </Card.Title>
                  <Card.Text className="text-center">
                    {course.description}
                  </Card.Text>
                  <div className="d-flex justify-content-end">
                    <Card.Link
                      href={course.link}
                      className="link"
                      target="_blank"
                    >
                      Consultez le plan d'études..
                    </Card.Link>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="container pb-4">
        <div className=" mt-5 mb-4 d-flex align-items-center">
          <img className="icons" src={licence_icon} />
          <div>
            <h1 className=" fw-semibold">Licences</h1>
            <h3 className=" lh-2 fw-light" style={{ fontSize: 15 }}>
              le projet de l'ISIMM adopte une approche pluridisciplinaire
              (connaissances fondamentales de base en première année,
              spécialisations diversifiées en deuxième et troisième années), une
              ouverture à la recherche ou sur le monde professionnel (en
              troisième année)
            </h3>
          </div>
        </div>

        <div className="row g-4">
          {courses.licences.map((course) => (
            <div key={course.id} className="col-lg-4">
              <Card className="text-white shadow scale-hover-effect">
                <div className="img-container">
                  <Card.Img
                    src={course.img}
                    className="img"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  />
                </div>
                <Card.ImgOverlay className="d-flex flex-column justify-content-center p-md-5">
                  <Card.Title className="fs-4 text-center my-1">
                    {course.title}
                  </Card.Title>
                  <Card.Text className="text-center">
                    {course.description}
                  </Card.Text>
                  <div className="d-flex justify-content-end">
                    <Card.Link
                      href={course.link}
                      className="link"
                      target="_blank"
                    >
                      Consultez le plan d'études..
                    </Card.Link>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Courses;
