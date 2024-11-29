import React from "react";
import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";
import { Routers } from "../routers/Router";

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </>
  );
}
