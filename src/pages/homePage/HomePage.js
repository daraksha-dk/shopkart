import React from "react";
import Products from "../../components/products/Products";
import Directory from "../../components/directory/Directory";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ padding: "0 7.5px 0" }}>
        <Products />
      </div>
      <Directory />
      <Footer />
    </div>
  );
};

export default HomePage;
