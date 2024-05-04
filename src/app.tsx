import ReactDOM, { hydrateRoot } from "react-dom/client";
import Routes from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Routes />);
