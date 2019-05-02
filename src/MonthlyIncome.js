import React from "react";

class MonthlyIncome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      width: "25%",
      minWidth: "200px",
      borderRight: "1px solid #cccccc",
      padding: "16px 24px",
      minHeight: "100vh",
      background: "white"
    };
    const styeleMonthlyIncome = {
      fontSize: "1.25rem",
      fontWeight: "normal",
      marginBottom: "8px"
    };

    const styleUnbudgeted = {
      fontSize: "1.125rem",
      fontWeight: "normal",
      marginBottom: "8px",
      marginTop: "40px"
    };
    const styleMonthlyIncInput = {
      width: "100%",
      fontSize: "20px",
      background: "transparent",
      border: "none",
      borderBottom: "1px solid #ccc",
      display: "block",
      padding: "4px 0",
      transition: "border - bottom - color 0.25s ease - out",
      outline: "none",
      paddingLeft: "16px"
    };

    const styleUnbudgetedPara = {
      color: "rgb(34, 34, 34)",
      fontSize: "1.25rem",
      margin: "0px"
    };

    const unbudgetedIncome = this.props.income - this.props.totalBudgeted;

    unbudgetedIncome < 0
      ? (styleUnbudgetedPara.color = "rgb(205, 92, 92)")
      : (styleUnbudgetedPara.color = "rgb(34, 34, 34)");

    return (
      <div style={style}>
        <h2 style={styeleMonthlyIncome}> Monthly Income </h2>
        <div
          className="line-field line-field--w-symbol"
          style={{ position: "relative" }}
        >
          <span>$</span>
          <input
            style={styleMonthlyIncInput}
            type="number"
            name="income"
            min="0"
            max="1000000"
            step="50"
            value={this.props.income}
            onChange={this.props.incomeChange}
          />
        </div>

        <h3 style={styleUnbudgeted}>Unbudgeted</h3>

        <p style={styleUnbudgetedPara}>
          <span>${unbudgetedIncome.toLocaleString()}</span>
        </p>
      </div>
    );
  }
}

export default MonthlyIncome;
