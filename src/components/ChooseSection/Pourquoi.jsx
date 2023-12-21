import React from "react";
import { Card } from "react-bootstrap";
function Pourquoi() {
  return (
    <div>
      <div className="container">
        <h2 className="text-center mb-5">Pourquoi choisir l'ISIMM?</h2>
        <div className="row g-4">
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#e2b977"
                  class="bi bi-file-earmark-bar-graph-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m.5 10v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5m-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  Score ymchi w yatla3
                </Card.Title>
                <Card.Text className="text-center">
                  meli dkhalt lel isimm w score te3ha ymchi w yatla3 machallah
                  fet l score ta lpharmacie
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#e2b977"
                  class="bi bi-airplane-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  Barcha events w opportunities w programs lbara
                </Card.Title>
                <Card.Text className="text-center">
                  Mr Lazhar mkather mel opportunities w dima fma programs lel UK
                  wel europe
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#e2b977"
                  class="bi bi-emoji-smile-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  We keep our students happy
                </Card.Title>
                <Card.Text className="text-center">
                  nakhtarou ahsen l profet w fma events w fama clubs and tarfih
                  fel fac, maktba mahloula 24/7
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pourquoi;
