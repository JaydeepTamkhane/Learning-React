import { Outlet } from "react-router-dom";
import Header from "./pages/Header"; 
function App() {
  return (
    <>
      <Header />
      <Outlet /> {/* Renders the routed components like Home, About, Contact */}
    </>
  );
}

export default App;
