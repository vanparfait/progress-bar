import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "./components/Menu/Menu";
import Home from "./pages/Home/Home";
import TechnoAdd from "./pages/TechnoAdd/TechnoAdd";
import TechnoList from "./pages/TechnoList/TechnoList";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [technos, setTechnos] = useState([]);

  const handleAddTechno = (techno) => {
    //setTechnos([...technos, techno]);
    setTechnos([...technos, { ...techno, technoid: uuidv4() }]);
  };

  function handleDelete(id) {
    const copyTechno = [...technos].filter((techno) => techno.technoid !== id);
    alert("voulez-vous vraiment Spprimer?");
    setTechnos(copyTechno);
  }

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add"
            element={<TechnoAdd handleAddTechno={handleAddTechno} />}
          />
          <Route
            path="/all"
            element={
              <TechnoList technos={technos} handleDelete={handleDelete} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
