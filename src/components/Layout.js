import React from "react";
import Header from "./header";
import "./Layout.scss";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <h1> {children}</h1>
      </div>
    </div>
  );
}

export default Layout;
