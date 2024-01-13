import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(() => {
    return localStorage.getItem("userData");
  });
  console.log(!!authenticated);
  return (
    <>
      <Header
        authenticated={!!authenticated}
        setAuthenticated={setAuthenticated}
      />

      <Outlet setAuthenticated={setAuthenticated} />
      <ToastContainer />

      <Footer />
    </>
  );
}

export default App;
