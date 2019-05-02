import React from "react";

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    const styles = {
      background: "dodgerblue",
      color: "white",
      padding: "16px"
    };
    const stylesForHeading = {
      fontSize: "2rem",
      fontWeight: "normal",
      margin: "0px",
      textAlign: "center"
    };
    return (
      <div style={styles}>
        <h1 style={stylesForHeading}>Time to Budget</h1>
      </div>
    );
  }
}

export default Header;
