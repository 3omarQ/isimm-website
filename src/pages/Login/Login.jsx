import React, { useState } from "react";
import "./Login.css";
const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [buttonClass, setButtonClass] = useState("_1gfg6utt");
  const [selectedButton, setSelectedButton] = useState(null);

  const handleIdentifierChange = (e) => {
    setIdentifier(e.target.value);
    updateButtonClass(e.target.value, password);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    updateButtonClass(identifier, e.target.value);
  };

  const updateButtonClass = (identifier, password) => {
    if (identifier.trim() !== "" && password.trim() !== "") {
      setButtonClass("_6n7s3pu");
    } else {
      setButtonClass("_1gfg6utt");
    }
  };

  //when the button is clicked it changes the style
  //the previously clicked button gets to his initial
  const handleButtonClick = (button) => {
    setSelectedButton(button);
    console.log(selectedButton);
  };
  /* const handleFormSubmit1 = (e) => {
        setIdentifier(e.target.value);
        e.preventDefault();
      
        if (identifier.trim() !== '' && password.trim() !== '') {
          setButtonClass('_6n7s3pu');
        }else if (identifier.trim() == '' || password.trim() == '') {
          setButtonClass('_1gfg6utt');
        }
      };

      const handleFormSubmit2 = (e) => {
        setPassword(e.target.value);
        e.preventDefault();
      
        if (identifier.trim() !== '' && password.trim() !== '') {
          setButtonClass('_6n7s3pu');
        }else if (identifier.trim() == '' || password.trim() == '') {
          setButtonClass('_1gfg6utt');
        }
      }; */
  return (
    <div className="_1tm0qdw">
      <section className="_11tqpu9b">
        <div className="_uq3hdk">
          <div className="_1tn296m _9wppf2e">
            <h1 className="_1o1wgj">Connectez-vous</h1>
            <h2 className="_1ivff18a">Ravis de vous retrouver !</h2>
            <div className="_1cslqzes">
              <span>
                En se connectant à ISIMM, vous acceptez nos{" "}
                <a
                  href="/about/tos"
                  target="_blank"
                  style={{ color: "inherit" }}
                >
                  Conditions d’utilisation
                </a>{" "}
                et{" "}
                <a
                  href="/about/privacy-policy"
                  target="_blank"
                  style={{ color: "inherit" }}
                >
                  notre Politique de confidentialité
                </a>
                .
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="_4u30mx2">
        <div className="_2gbtz8">
          <span tabIndex="-1"></span>
          <div className="_2wrx56">
            <div className="_1rcl08e">
              <button
                className={`_1m2ob3wg ${
                  selectedButton === "etudiant" ? "selected" : ""
                }`}
                onClick={() => handleButtonClick("etudiant")}
              >
                Etudiant
              </button>
              <button
                className={`_1m2ob3wg ${
                  selectedButton === "enseignant" ? "selected" : ""
                }`}
                onClick={() => handleButtonClick("enseignant")}
              >
                Enseignant
              </button>
              <button
                className={`_1m2ob3wg ${
                  selectedButton === "administrateur" ? "selected" : ""
                }`}
                onClick={() => handleButtonClick("administrateur")}
              >
                Administrateur
              </button>
            </div>

            <form className="_wgmchy">
              <span className="_1aixq078">
                <span className="_euf586">*</span> indique un champ obligatoire.
              </span>
              <div className="_g46y7xc"></div>
              <div className="_xu2jcg">
                <label
                  htmlFor="uid-login-form-3-wb-id-identifier-field"
                  className="_1x6ahvlr"
                  data-test-id="identifier-label"
                >
                  Identifiant
                  <span aria-hidden="true" className="_euf586">
                    {" "}
                    *
                  </span>
                </label>
                <div aria-hidden="true" className="_akfsuo"></div>
                <div aria-hidden="true" className="_xg1f1zo"></div>
                <input
                  id="uid-login-form-3-wb-id-identifier-field"
                  type="text"
                  data-test-id="identifier-field"
                  aria-describedby="uid-login-form-3-wb-id-identifier-error"
                  aria-invalid="false"
                  aria-required="true"
                  className="_1azps1m"
                  onChange={handleIdentifierChange}
                />
              </div>
              <div aria-hidden="true" className="_4bsxcct"></div>
              <div className="_xu2jcg">
                <label
                  htmlFor="uid-labeled-text-field-4-wb-id-field"
                  className="_1x6ahvlr"
                  data-test-id="password-label"
                >
                  Mot de passe
                  <span aria-hidden="true" className="_euf586">
                    {" "}
                    *
                  </span>
                </label>
                <div aria-hidden="true" className="_akfsuo"></div>
                <div aria-hidden="true" className="_xg1f1zo"></div>
                <input
                  id="uid-labeled-text-field-4-wb-id-field"
                  type="password"
                  data-test-id="password-field"
                  aria-describedby="uid-labeled-text-field-4-wb-id-error"
                  aria-invalid="false"
                  aria-required="true"
                  className="_1azps1m"
                  onChange={handlePasswordChange}
                />
              </div>
              <div aria-hidden="true" className="_j45ygct"></div>
              <a className="_da68dmd" href="/forgotpw">
                Mot de passe oublié ?
              </a>
              <a
                type="submit"
                data-test-id="log-in-submit-button"
                role="button"
                aria-disabled="true"
                className={buttonClass}
                href="/account"
              >
                <span
                  className="_1gw4cnik"
                  data-test-id="log-in-submit-button-inner-label"
                >
                  Connectez-vous
                </span>
              </a>
            </form>
            <div className="_1tz93mn">
              <a className="_1666bk1u" href="/signup">
                Créer un compte
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
