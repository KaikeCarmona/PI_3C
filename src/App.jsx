import { Outlet } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Outlet></Outlet>
    </div>
  );
}

export default App;
