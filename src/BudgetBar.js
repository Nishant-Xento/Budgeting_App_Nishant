import React from "react";

const style = {
  minWidth: "300px",
  background: "white",
  boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
  display: "flex",
  flex: "1 1 0%",
  justifyContent: "space-between",
  margin: "8px",
  padding: "16px"
};

const titleStyle = {
  width: "55%",
  color: "#222",
  fontSize: "1.5rem",
  textTransform: "capitalize"
};

const amountStyle = {
  width: "30%",
  color: "#58D68D",
  fontSize: "1.5rem",
  fontWeight: "bold",
  textAlign: "left"
};

const closeBtn = {
  background: "transparent",
  border: "none",
  color: "#666",
  fontSize: "1rem",
  padding: 0,
  cursor: "pointer",
  outline: "none"
};

class BudgetBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={style}>
        <span style={titleStyle}>{this.props.name}</span>
        <span style={amountStyle}>${this.props.amount.toLocaleString()}</span>
        <button
          style={closeBtn}
          onClick={() => this.props.remove(this.props.id)}
        >
          x
        </button>
      </div>
    );
  }
}

export default BudgetBar;
