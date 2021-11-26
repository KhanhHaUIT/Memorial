import React from "react";
import Background from "../components/ContentHome/Background.js";
import Commemorate from "../components/ContentHome/Commemorate.js";
import CommemorateForm from "../components/ContentHome/CommemorateForm.js";
import Form from "../components/ContentHome/Form/index.js";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Background />
      <Commemorate/>
      <CommemorateForm/>
      <Form/>
    </>
  );
};

export default Home;