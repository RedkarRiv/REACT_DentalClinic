import React, { useState, useEffect } from "react";
import "./Home.css";
import { StatCard } from "../../common/StatCard/StatCard";
import { ContactFormCard } from "../../common/ContactFormCard/ContactFormCard";
import { CallUsButton } from "../../common/CallUsButton/CallUsButton";
import { TreatmentCard } from "../../common/TreatmentCard/TreatmentCard";
import ortodoncia from "../../assets/img/ortodoncia.jpg"
import caries from "../../assets/img/caries.svg"
import esteticaDental from "../../assets/img/esteticaDental.svg"
import protesisDental from "../../assets/img/protesisDental.svg"
import odontopediatria from "../../assets/img/odontopediatria.svg"
import periodoncia from "../../assets/img/periodoncia.svg"
import dolorMaxilar from "../../assets/img/dolorMaxilar.svg"
import cirugiaOral from "../../assets/img/cirugiaOral.svg"
import { SectionTitle } from "../../common/SectionTitle/SectionTitle";
import { RegisterFormCard } from "../../common/RegisterFormCard/RegisterFormCard";


export const Home = () => {
  return (
    <div className="homeDesign">
      <div className="slide1">
        <div className="slide11">
          <div className="slide12">
            <div className="slide121">
              <div className="contactFormCardHomeContainer">
                <ContactFormCard titleContact={"CONSULTA GRATUITA"} />
              </div>
            </div>
            <div className="slide122">
              <div className="callUsHomeContainer">
                <CallUsButton />
              </div>

              <div className="risaldentResumeCard">
                <StatCard name={"Clientes"} data={"+1500"} id={1} />
                <StatCard name={"Tratamientos"} data={"+1200"} id={1} />
                <StatCard name={"Experiencia"} data={"+15 años"} id={1} />
                <StatCard name={"Estrellas"} data={"4.8/5"} id={1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide2">
        <SectionTitle sectionTitle={"Nuestras especialidades"} />
        <div className="mainSpecialitiesCardsHomeContainer">
        <div className="specialitiesCardsHomeContainer">
          <div className="specialityCardHomeContainer"><TreatmentCard id={1} img_link={ortodoncia} img_name={"ortoncia"}  treatmentTitle={"ORTODONCIA"} treatmentDescription={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias "}/></div>
          <div className="specialityCardHomeContainer"><TreatmentCard id={1} img_link={caries} img_name={"caries"}  treatmentTitle={"CARIES"} treatmentDescription={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias "}/></div>
          <div className="specialityCardHomeContainer"><TreatmentCard id={1} img_link={esteticaDental} img_name={"esteticaDental"}  treatmentTitle={"ESTÉTICA DENTAL"} treatmentDescription={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias "}/></div>
          <div className="specialityCardHomeContainer"><TreatmentCard id={1} img_link={protesisDental} img_name={"protesisDental"}  treatmentTitle={"PRÓTESIS"} treatmentDescription={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias "}/></div>
</div>
          <div className="specialitiesCardsHomeContainer">
          <div className="specialityCardHomeContainer"><TreatmentCard id={1} img_link={odontopediatria} img_name={"odontopediatria"}  treatmentTitle={"ODONTOPEDIATRÍA"} treatmentDescription={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias "}/></div>
          <div className="specialityCardHomeContainer"><TreatmentCard id={1} img_link={periodoncia} img_name={"periodoncia"}  treatmentTitle={"PERIODONCÍA"} treatmentDescription={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias "}/></div>
          <div className="specialityCardHomeContainer"><TreatmentCard id={1} img_link={dolorMaxilar} img_name={"dolorMaxilar"}  treatmentTitle={"DOLOR Y ARTICULACIÓN"} treatmentDescription={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias "}/></div>
          <div className="specialityCardHomeContainer"><TreatmentCard id={1} img_link={cirugiaOral} img_name={"cirugiaOral"}  treatmentTitle={"CIRUGÍA ORAL"} treatmentDescription={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias "}/></div>
        </div>
        </div>
      </div>
      <div className="slide3">
        <div className="slide31">
        <SectionTitle sectionTitle={"¡PRIMERA CITA GRATIS!"} />
          <div className="registerFormCardHomeDesign"><RegisterFormCard titleRegister={"REGISTRATE GRATIS"}/></div>
          
        </div>
      </div>
    </div>
  );
};
