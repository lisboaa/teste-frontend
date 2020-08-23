import React, { useState, useEffect } from "react";
import api from "./services/api";
import "./css/global.css";
import "./css/app.css";
import "./css/sidebar.css";
import "./css/main.css";

import DevItem from "./components/DevItem";
import DevForm from "./components/DevForm";
import Header from "./components/Header";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");
      console.log(response);
      setDevs(response.data);
    }
    loadDevs();
  }, []);

  async function searchDev() {

  }

  async function handleAddDev(data) {
    const response = await api.post("/devs", data);

    setDevs([...devs, response.data]);
  }

  return (
    <div>
      <Header/>
      <container id="app">
      <>
        <aside>
          <strong>Cadastrar</strong>
          <DevForm onSubmit={handleAddDev} />
        </aside>

        <main>
          <ul>
            {devs.map(dev => (
              <DevItem key={dev._id} dev={dev} />
            ))}
          </ul>
        </main>
      </>  
      </container>
      
    </div>
  );
}

export default App;
