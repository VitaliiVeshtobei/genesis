import React from "react";
import { Outlet } from "react-router";
import { Header } from "../Header/Header";
import { Container } from "./LayoutStyled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Header />
      <Outlet />
    </Container>
  );
};

export default Layout;
