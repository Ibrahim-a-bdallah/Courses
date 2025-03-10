import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { AppRoutes } from "./routes/AppRoutes";
import { store } from "./store/index";

import "bootstrap/dist/css/bootstrap.min.css";
// import { PersistGate } from "redux-persist/integration/react";
// import { PersistGate } from "redux-persist/lib/integration/react";
// import { PersistGate } from "redux-persist/es/integration/react";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <AppRoutes />
    {/* </PersistGate> */}
  </Provider>
);
