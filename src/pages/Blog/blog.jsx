import React from "react";
import "./blog.css";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Blog1img from "../../utils/images/important.jpg";
import Blog2img from "../../utils/images/actualite2.jpg";
import Blog3img from "../../utils/images/actualite3.jpg";
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

function blog() {
  return (
    <div className="blog-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Blog </h1>
          <p className="text-center w-75 mb-3 mt-4">
            Découvrez toutes nos actualités
          </p>
        </div>
      </header>
      <div className="blog-sectionn text-dark py-5">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-center text-capitalize mb-5">Nos actualités</h2>
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <Link to="/blog" className="text-decoration-none">
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
        </div>
      </div>
    </div>
  );
}

export default blog;
