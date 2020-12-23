import React, { useState, useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Portfolio } from "../../models";

const Projects = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const getPortfolio = async () => {
      const models = await DataStore.query(Portfolio);
      setApps(models);
      console.log(models);
    };
    getPortfolio();
  }, []);

  return (
    <div>
      {apps.map((app) => (
        <h1 key={app.id}>{app.title}</h1>
      ))}
    </div>
  );
};

export default Projects;
