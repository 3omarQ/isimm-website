import React from "react";
import "./Foyer.css";

import femenine from  "../../utils/images/femenine.png";
import masculine from  "../../utils/images/masculine.png";




function Foyers() {
  return (
    <div className="foyers-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold mt-5">Les Foyers Universitaires</h1>
          <p className="text-center mt-4 mb-1 mx-5">
            "Les étudiants de l’ISIMM ont la possibilité de rejoindre l’un des trois foyers universitaires publics disponibles. 
            Les foyers Fattouma Bourguiba et 3 Août sont destinés aux filles et se trouvent à proximité de l’institut, à seulement 10 minutes de marche l’un de l’autre. En revanche, le foyer Imem Mezri, 
            réservé aux garçons, est situé plus loin de l’ISIMM et nécessite un moyen de transport pour s’y rendre."
          </p>
        </div>
      </header>
      <div className="container pb-4">
        <div className=" mt-5 mb-4 d-flex align-items-center">
          <img className="icons" src={femenine} />
          <div>
            <h1 className=" fw-semibold">résidences des filles</h1>
          </div>
        </div>
        <br/><br/>
        <div className="legend">Foyer Universitaire Fattouma Bourguiba</div>
        <div className="map-responsive">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.3543481341767!2d10.831643119454379!3d35.76667112538727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130212d191c83a99%3A0x91edf99dbe046290!2sFoyer%20Fattouma%20Bourguiba!5e0!3m2!1sfr!2stn!4v1706559288258!5m2!1sfr!2stn"
          /* width="600"
          height="450"
          style={{ border: '0' }} */
          allowFullScreen=""
          loading=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
        <br/><br/>
        <div className="legend">Foyer Universitaire 3 Août</div>
        <div className="map-responsive">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.3543481341767!2d10.831643119454379!3d35.76667112538727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130212d228cfeb01%3A0x3d17ff8e23efd930!2sFoyer%203%20Aout!5e0!3m2!1sfr!2stn!4v1706563755249!5m2!1sfr!2stn"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading=""
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
        
      </div>
      <hr />
      <div className="container pb-4">
        <div className=" mt-5 mb-4 d-flex align-items-center">
          <img className="icons" src={masculine } />
          <div>
            <h1 className=" fw-semibold">résidences des garçons</h1>
          </div>
        </div>
        <br/><br/>
        <div className="legend">Foyer Universitaire Imem Mezri</div>
        <div className="map-responsive">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12949.555322599272!2d10.795248807812499!3d35.765823899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130212b023eb2a6b%3A0x892c2f9e797903b3!2sFoyer%20Universitaire%20Imem%20Mezri!5e0!3m2!1sfr!2stn!4v1706617734793!5m2!1sfr!2stn"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading=""
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      </div> 
      <hr />
    </div>
  );
}

export default Foyers;
