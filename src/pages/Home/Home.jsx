import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Card } from "react-bootstrap";
import Blog1img from "../../utils/images/important.jpg";
import Blog2img from "../../utils/images/actualite2.jpg";
import Blog3img from "../../utils/images/actualite3.jpg";
import Pourquoi from "../../components/ChooseSection/Pourquoi";

const blogs = [
  {
    id: 1,
    img: [Blog1img],
    title: "Inscription retardée",
    description:
      "La quatrième notification d'inscription spéciale pour l'année académique 2023-2024",
  },
  {
    id: 2,
    img: [Blog2img],
    title: "Bourse doctorat",
    description:
      "La bourse de doctorat offerte par l'ISIMM représente une opportunité exceptionnelle pour les chercheurs talentueux en informatique et en mathématiques.",
  },
  {
    id: 3,
    img: [Blog3img],
    title: "EDISS programme Master",
    description:
      "Le programme de master EDISS pour l'année académique 2023/2024 en Finlande propose un cursus de pointe en sciences sociales interdisciplinaires",
  },
];

function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container d-flex flex-column align-items-center">
          <h2>Bienvenue à</h2>
          <h1 className="text-center fw-semibold">ISIMM</h1>
          <p>
            L’ISIMM est un établissement public tunisien dédié à l’enseignement supérieur et à la recherche scientifique. Créé en 2002, il relève de l’Université de Monastir et du Ministère de l’Enseignement Supérieur et de la Recherche Scientifique. L’ISIMM est un foyer où excellence académique et innovation se rencontrent, réunissant une communauté dynamique d’esprits curieux façonnant l’avenir de la technologie et de l’exploration mathématique. 🎓🚀
          </p>
          <div className="d-flex flex-column flex-sm-row align-items-center">
            <Link to="/courses">
              <button
                type="button"
                className="btn btn-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Nos filières
              </button>
            </Link>
            <Link to="/contact">
              <button
                type="button"
                className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
              >
                Contactez-nous
              </button>
            </Link>
          </div>
        </div>
      </header>

      <div className="py-5">
        <Pourquoi />
      </div>

      <div className="blog-section text-light py-5">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-center text-capitalize mb-5">Nos actualités</h2>
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <Link to="/Vie_Etudiantine" className="text-decoration-none">
                  <Card className="b-100 shadow scale-hover-effect">
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className="p-md-5">
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <Link to="Vie_Etudiantine">
            <button type="button" className="btn btn-light btn-lg mt-4">
              Voir plus..
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
