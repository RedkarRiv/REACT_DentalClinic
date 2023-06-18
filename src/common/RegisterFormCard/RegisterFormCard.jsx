import React, { useState } from "react";
import "./RegisterFormCard.css";
import { InputText } from "../InputText/InputText";
import { SendButton } from "../../common/SendButton/SendButton";

export const RegisterFormCard = ({ titleRegister }) => {
  const [credentials, setCredentials] = useState({});

  const InputHandler = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="simpleRegisterCardDesign">
      <div className="registerFormContainer">
        <div className="registerFormTitle">
          <p>{titleRegister}</p>
        </div>

        <div className="registerFormSection">
          <div className="formSection">
            <div className="inputNameRegisterDesign commitedInputDesign">Nombre</div>
            <InputText
              type={"name"}
              placeholder={""}
              name={"name"}
              classDesign={"InputText"}
              functionHandler={InputHandler}
            />
          </div>
          <div className="formSection">
            <div className="inputNameRegisterDesign">Apellidos</div>
            <InputText
              type={"surname"}
              placeholder={""}
              name={"surname"}
              classDesign={"InputText"}
              functionHandler={InputHandler}
            />
          </div>
        </div>

        <div className="registerFormSection">
          <div className="formSection">
            <div className="inputNameRegisterDesign">Fecha de nacimiento</div>
            <InputText
              type={"date"}
              placeholder={""}
              name={"date"}
              classDesign={"InputText"}
              functionHandler={InputHandler}
            />
          </div>
          <div className="formSection">
            <div className="inputNameRegisterDesign">Código postal</div>
            <InputText
              type={"address"}
              placeholder={""}
              name={"address"}
              classDesign={"InputText"}
              functionHandler={InputHandler}
            />
          </div>
        </div>

        <div className="registerFormSection">
          <div className="formSection">
            <div className="inputNameRegisterDesign commitedInputDesign">Teléfono</div>
            <InputText
              type={"phone"}
              placeholder={""}
              name={"phone"}
              classDesign={"InputText"}
              functionHandler={InputHandler}
            />
          </div>
          <div className="formSection">
            <div className="inputNameRegisterDesign commitedInputDesign">Email</div>
            <InputText
              type={"email"}
              placeholder={""}
              name={"email"}
              classDesign={"InputText"}
              functionHandler={InputHandler}
            />
          </div>
        </div>

        <div className="registerFormSection">
          <div className="formSection">
            <div className="inputNameRegisterDesign commitedInputDesign">Contraseña</div>
            <InputText
              type={"password"}
              placeholder={""}
              name={"password"}
              classDesign={"InputText"}
              functionHandler={InputHandler}
            />
          </div>
          <div className="formSection">
            <div className="inputNameRegisterDesign commitedInputDesign">Repite la contraseña</div>
            <InputText
              type={"password"}
              placeholder={""}
              name={"password"}
              classDesign={"InputText"}
              functionHandler={InputHandler}
            />
          </div>
        </div>

        <SendButton path={"/"} name={"Registrarme"} />
        <p className="commitedAlert">*Los campos subrayados son obligatorios</p>
      </div>
    </div>
  );
};
