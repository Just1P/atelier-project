// src/App.tsx
import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header title="Mon Application" />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
