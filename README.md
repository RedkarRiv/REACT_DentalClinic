# FrontEnd - Clinica Dental
Proyecto 4 - FrontEnd para GeeksHubs **REACT, REDUX, REACT-SELECT, REACT-DOM, , REACT-PERSIST, REACT-THUMK, MOMENT.JS, MDB-BOOTSTRAP,  JAVASCRIPT, BOOTSTRAP, JWT_DECODE.**


## Índice

- [🎯Objetivo🎯](#objetivo)
- [🪛Desarrollo🪛](#desarrollo)
- [📍Vistas📍](#vistas)
- [👏Agradecimientos👏](#agradecimientos)


### 🎯 Objetivo 🎯

El objetivo de este proyecto es desarrollar desde cero una API SPA (Single Page Application) funcional para una clinica dental con registros de lectura y edición sobre la bbdd mediante el backend del anterior proyecto. 

Para cumplir el objetivo se han incluido las vistas para cumplir con la funcionalidades básicas de una página web con las siguientes carácteristicas: login, registro,visualización de datos del usuario, edición de datos del usuario, visualización de citas en detalle, búsqueda de citas, edición de citas y panel de control de admin.

### 🪛 Desarrollo 🪛

La API ha sido desarrollada por Carlos Redondo como parte de la formación Full Stack Developer de GeeksHubs. 

Para la realización del proyecto, se han utilizado el siguiente stack tecnologico:

Se ha utilizado Vite-React-JS como base del proyecto y estructura básica para conseguir una SPA funcional.

Para la gestión de información entre los diferentes componentes de la APP se ha implementado REDUX. En este caso, el uso de REDUX se ha limitado a las credenciales del usuario ya que no se ha sido necesario implementarlo en el resto de vistas/componentes.

REDUX-PERSIST y REDUX-THUNK se han añadido como librerias adicionales para la conservación de las credenciales de la página a pesar del cierre de la pestaña o ventana del navegador.

En cuanto al diseño, se han utilizado componentes de Bootstrap y MDB-Bootstrap para conseguir un diseño atractivo y responsive. Como elementos adicionales, se han incluido: REACT-SELECT para mejora la visualización de los dropdowns y facilita la gestión de datos y MOMENT.JS para el formateo de fechas y las validaciones pertinentes.

Por último, como herramientas utilitarias hemos usado JWC_DECODED con el objetivo de desencriptar los datos del token recibido por el backend y poder trabajar con las credenciales correspondientes.


### 📍 Vistas 📍

Vista administrador:
<p align="center">
<img src="https://raw.githubusercontent.com/RedkarRiv/REACT_DentalClinic/master/img/adminProfileView.png"  width="700" height="400"></p>

Vista usuario:
<p align="center">
<img src="https://raw.githubusercontent.com/RedkarRiv/REACT_DentalClinic/master/img/userProfileView.png"  width="700" height="400"></p>

Vista empleado:
<p align="center">
<img src="https://raw.githubusercontent.com/RedkarRiv/REACT_DentalClinic/master/img/employeeProfileView.png"  width="600" height="400"></p>


### 👏 Agradecimientos 👏

Este proyecto no habría sido posible sin el inestimable ayuda de los docentes:David Ochando, Mara Scampini y Dani Tarazona.


Si eres desarrollador, te apasiona el mundo de la programación y te gusta colaborar, puedes ponerte en contacto con nuestro equipo en: *gbc_friendsfamilyandfruits@rockon.geeks*.