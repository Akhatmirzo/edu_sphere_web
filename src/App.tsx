import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <ScrollTop>
      <RouterProvider router={router} />
    </ScrollTop>
  );
}

export default App;
