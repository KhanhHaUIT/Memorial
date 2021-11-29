import React from "react";
import Background from "../components/ContentHome/Background";
import DetailMemory from "../components/DetailMemory";
import Header from "../components/Header";
import { useEffect, useContext } from "react";
import { MemorialContext } from "../contexts/MemorialContext";

export default function DetailMemorial() {
  const { getMemorials } = useContext(MemorialContext);
  useEffect(() => {
    getMemorials();
  }, []);

  return (
    <>
      <Header />
      <Background />
      <DetailMemory />
    </>
  );
}
