import React from "react";
import "./Clubs.css";

import { Card } from "react-bootstrap";
import ieee from "../../utils/images/ieee.jpg";
import cri from "../../utils/images/cri.jpg";
import atia from "../../utils/images/ATIA.jpg";
import cpu from "../../utils/images/cpu.jpg";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
const courses = {
  clubs: [
    {
      id: 1,
      img: cpu,
      title: "CPU ISIMM",
      link: "https://www.facebook.com/CPU.ISIMM",
      description:
        "Nous combinons l’excitation de la robotique avec le monde sans fin du développement logiciel. Nos membres ont l’opportunité de concevoir et de construire des robots, tout en développant des logiciels.",
    },
    {
      id: 2,
      img: ieee,
      title: "IEEE ISIMM Student Branch",
      link: "https://www.facebook.com/IEEEISIMMSB",
      description:
        "IEEE est une association professionnelle. L’IEEE compte plus de 400 000 membres et possède différentes branches dans plusieurs parties du monde. L’organisation a pour but de promouvoir la connaissance dans le domaine de l’ingénierie.",
    },
    {
      id: 3,
      img: atia,
      title: "ATIA",
      link: "https://www.facebook.com/profile.php?id=100086600541050",
      description:
        "L’Association Tunisienne pour l’Intelligence Artificielle vise à promouvoir le rôle de levier socio-économique de l’Intelligence Artificielle au profit de la société et des individus. ",
    },
    {
      id: 4,
      img: cri,
      title: "CRI",
      link: "https://www.facebook.com/C.R.ISIMM",
      description:
        "CRI est un groupe des jeunes actifs doués par la conception et le développement robotique à l'ISIMM.",
    },
    {
      id: 5,
      img: ieee,
      title: "IEEE ISIMM Student Branch",
      link: "https://www.facebook.com/IEEEISIMMSB",
      description:
        "IEEE est une association professionnelle. L’IEEE compte plus de 400 000 membres et possède différentes branches dans plusieurs parties du monde. L’organisation a pour but de promouvoir la connaissance dans le domaine de l’ingénierie.",
    },
    {
      id: 6,
      img: atia,
      title: "ATIA",
      link: "https://www.facebook.com/profile.php?id=100086600541050",
      description:
        "L’Association Tunisienne pour l’Intelligence Artificielle vise à promouvoir le rôle de levier socio-économique de l’Intelligence Artificielle au profit de la société et des individus. ",
    },
  ],
  
};

function Clubs() {
  return (
    <div className="clubs-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold mt-5">Nos Clubs</h1>
          <p className="text-center mt-4 mb-1 mx-5">
            
          </p>
        </div>
      </header>
      <br/>
      <div className="container pb-4">
      <div className="container pb-4 text-center">
        <h1 className="fw-semibold">rejoignez nos clubs</h1>
      </div>
        <div className="row g-4">
          {courses.clubs.map((course) => (
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
                      Consultez la page facebook
                    </Card.Link>
                  </div>
                </Card.ImgOverlay>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="container pb-4 text-center">
        <h1 className="fw-semibold">Quelques moments</h1>
        <ImageGallery />
      </div>      
      <hr />
    </div>
  );
}

export default Clubs;
