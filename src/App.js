import React from "react";
import "./App.css";
import Header from "./components/Header";
import ResourceSection from "./components/ResourceSection";
import { resourceData } from "./data.js";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <ResourceSection
        data={resourceData}
      ></ResourceSection>
      <ResourceSection
        data={resourceData}
        bgColor="bg-blue-50"
      ></ResourceSection>
    </React.Fragment>
  );
}

export default App;
