import { useState } from "react";
import "./App.css";
import Tab from "./components/Tab";

function App() {
  const tabs = [
    {
      title: "Tab 1",
      content: "Content for Tab 1",
    },
    {
      title: "Tab 2",
      content: "Content for Tab 2",
    },
    {
      title: "Tab 3",
      content: "Content for Tab 3",
    },
  ];

  return (
    <>
      <Tab tabs={tabs}/>
    </>
  );
}

export default App;
