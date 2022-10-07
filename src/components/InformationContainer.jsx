import {
  AiFillPhone,
  AiTwotoneMail,
  AiOutlineEnvironment,
} from "react-icons/ai";
import React from "react";
import "../styles/components/informationcontainer.sass";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Telefone: </h3>
          <p>(84) 99646-3271</p>
        </div>
      </div>
      <div className="info-card">
        <AiTwotoneMail id="email-icon" />
        <div>
          <h3>E-mail: </h3>
          <p>keila.amadap@hotmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineEnvironment id="local-icon" />
        <div>
          <h3>Localizacao:</h3>
          <p>Natal, RN</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
