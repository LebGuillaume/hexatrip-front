import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./store.ts";
import { Provider } from "react-redux";
import { ConfirmProvider } from "material-ui-confirm";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
