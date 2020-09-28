import React from "react";

const LoadingSpinner = () => (
  <div
    style={{
      width: "100%",
      marginTop: `15px`,
      display: "flex",
      justifyContent: "center",
      fontFamily: "HK Grotesk",
      fontWeight: "600"
    }}
  >
    <div>
      <i
        style={{ textAlign: "center" }}
        className="fas fa-circle-notch fa-spin"
      />
      &nbsp;&nbsp; Loading
    </div>
  </div>
);

export default LoadingSpinner;
