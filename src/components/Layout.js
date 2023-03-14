import React from "react";
import { Outlet } from "react-router";
import { Header } from "./Header/Header";

const Layout = () => {
  return (
    <div style={{ backgroundColor: "#5CDB95" }}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
