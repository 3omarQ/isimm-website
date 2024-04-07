import React from "react";
import "./Restaurants.css";

import femenine from  "../../utils/images/femenine.png";
import restau from  "../../utils/images/restaurant.png";




function Restaurants() {
  return (
    <div className="foyers-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold mt-5">Les Restaurants Universitaires</h1>
          <p className="text-center mt-4 mb-1 mx-5">
            "Les étudiants de l’ISIMM ont la possibilité de se restaurer dans l’un des restaurants universitaires publics disponibles. Le restaurant universitaire le plus proche est Fattouma Bourguiba, qui se trouve à seulement 10 minutes à pied de l’institut. Les Roses, un autre restaurant universitaire, est situé à 20 minutes à pied de l’ISIMM. Enfin, il y a un autre restaurant situé à Skanes."
          </p>
        </div>
      </header>
      <div className="container pb-4">
        <div className=" mt-5 mb-4 d-flex align-items-center">
          <img className="icons" src={restau} />
          <div>
            <h1 className=" fw-semibold">Les Restaurants Universitaires</h1>
          </div>
        </div>
        <br/><br/>
        <div className="legend">Restaurant Universitaire Fattouma Bourguiba</div>
        <div className="map-responsive">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12949.178484197351!2d10.82884803566235!3d35.7681385613535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130213efcb7b7f8b%3A0x21e902fdcd3376bb!2sRestaurant%20Universitaire%20Fatouma!5e0!3m2!1sfr!2stn!4v1706620334138!5m2!1sfr!2stn"
          /* width="600"
          height="450"
          style={{ border: '0' }} */
          allowFullScreen=""
          loading=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
        <hr />
        <br/><br/>
        <div className="legend">Restaurant Universitaire Les Roses</div>
        <div className="map-responsive">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12950.088633321742!2d10.808049738407126!3d35.76254791399308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130212c7d08de693%3A0x15136a1c89325a!2sRestaurant%20Universitaire%20Les%20roses!5e0!3m2!1sfr!2stn!4v1706620485801!5m2!1sfr!2stn"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading=""
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        <hr />

        <br/><br/>
        <div className="legend">Restaurant Universitaire Skanes</div>
        <div className="map-responsive">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12949.512229190537!2d10.785882407812494!3d35.7660886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130212a866f4357b%3A0x147d5230180d5a00!2z2KfZhNmF2LfYudmFINin2YTYrNin2YXYudmKINi12YLYp9mG2LMg2KfZhNmF2YbYs9iq2YrYsQ!5e0!3m2!1sfr!2stn!4v1706620586817!5m2!1sfr!2stn"
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

export default Restaurants;
