import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import store from "./app/store";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";

// const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate loading={null} persister={persistor}> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </PersistGate>
    </Provider> */}
  </React.StrictMode>
);
