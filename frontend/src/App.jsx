import React from "react";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#111827",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ fontSize: "48px" }}>
        Meme AI Platform 🚀
      </h1>

      <p style={{ marginTop: "20px" }}>
        Successfully deployed on AWS EC2 using Docker
      </p>
    </div>
  );
}

export default App;
