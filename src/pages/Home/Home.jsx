import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";
import  mapClinic from  "../../assets/img/mapClinic.png"
export const Home = () => {
  return (
    <div className="homeBackground">
      <div className="slide1Container">
        <div id="carouselExampleSlidesOnly">
          <div>
            <img
              src="https://img.freepik.com/vector-gratis/nino-dentista-clinica-nina-tenencia-juguete_107791-15828.jpg?w=1380&t=st=1688340109~exp=1688340709~hmac=0e1dfa6141eb65ba0edc752155d2f3304ae396cf6fa372cddb3d8a3079f06c62"
              class="d-block w-100"
              alt="Wild Landscape"
            />
          </div>
        </div>
      </div>
      <div className="slide2Container">
        <div className="infoButtonHomeDesign">
          <div className="titleButtonDesign">
            <p>DATOS DE CONTACTO</p>
          </div>
          <div className="bodyButtonDesign">
            <div className="contactButtonDesign">
              <p><strong>Telefono: </strong>677 88 00 99</p>
              <p><strong>Email: </strong> risaldent@risaldent.com</p>
              <p><strong>Abrimos de: </strong> Lunes a Viernes</p>
              <p><strong>Horario: </strong> 09:00 a 14:00 y 16:00 a 20:00</p>
              <p><strong>Dirección: </strong> C/ La muela 33, Torreznolones</p>
            </div>
            <div className="mapButtonDesign">
              <img src={mapClinic} alt="Mapa de la clinica"></img>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
